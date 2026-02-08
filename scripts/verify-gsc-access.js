#!/usr/bin/env node
/**
 * Verify GSC access for mplsvegan.com using service account
 */

const { google } = require('googleapis');
const path = require('path');

const SERVICE_ACCOUNT_PATH = path.join(
  process.env.HOME,
  '.config/gcloud/botti-service-account.json'
);

async function verifyGSCAccess() {
  try {
    console.log('🔍 Verifying GSC access for mplsvegan.com...\n');

    // Create auth client with service account
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_PATH,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: authClient,
    });

    // List all sites this service account has access to
    console.log('📋 Fetching accessible sites...');
    const sitesResponse = await searchconsole.sites.list();
    const sites = sitesResponse.data.siteEntry || [];

    console.log(`\n✅ Service account has access to ${sites.length} site(s):\n`);
    
    sites.forEach((site, index) => {
      console.log(`${index + 1}. ${site.siteUrl}`);
      console.log(`   Permission: ${site.permissionLevel}\n`);
    });

    // Check specifically for mplsvegan.com
    const mplsVeganSites = sites.filter(site => 
      site.siteUrl.includes('mplsvegan.com')
    );

    if (mplsVeganSites.length > 0) {
      console.log('🎉 SUCCESS! Service account has access to mplsvegan.com');
      console.log('\nAccessible mplsvegan.com properties:');
      mplsVeganSites.forEach(site => {
        console.log(`  • ${site.siteUrl} (${site.permissionLevel})`);
      });

      // Try to fetch some basic data
      const targetSite = mplsVeganSites[0].siteUrl;
      console.log(`\n📊 Testing data access for ${targetSite}...`);

      const endDate = new Date();
      const startDate = new Date(endDate);
      startDate.setDate(startDate.getDate() - 7);

      const analyticsResponse = await searchconsole.searchanalytics.query({
        siteUrl: targetSite,
        requestBody: {
          startDate: startDate.toISOString().split('T')[0],
          endDate: endDate.toISOString().split('T')[0],
          dimensions: ['query'],
          rowLimit: 5,
        },
      });

      const rows = analyticsResponse.data.rows || [];
      console.log(`✅ Successfully retrieved ${rows.length} search queries`);
      
      if (rows.length > 0) {
        console.log('\nTop queries (last 7 days):');
        rows.forEach((row, i) => {
          console.log(`${i + 1}. "${row.keys[0]}" - ${row.clicks} clicks, ${row.impressions} impressions`);
        });
      }

    } else {
      console.log('⚠️  No mplsvegan.com properties found in accessible sites');
      console.log('\nPossible reasons:');
      console.log('1. Invite hasn\'t been sent yet');
      console.log('2. Invite hasn\'t been accepted');
      console.log('3. Domain verification pending');
      console.log('\nService account email: botti-485@botti-analytics.iam.gserviceaccount.com');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response data:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

verifyGSCAccess();
