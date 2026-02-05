# Restaurant Enhancement Batch Plan

## Summary
- **Total restaurants:** 45
- **Completed:** 4 (herbivorous-butcher, j-selbys, lulu-ethiovegan, reverie-cafe-bar)
- **Remaining:** 41
- **Estimated cost:** ~$2.05 (41 × $0.05)
- **Estimated time:** ~3-4 hours total (can run overnight)

## Batching Strategy
Process in groups of 10-12 to avoid overloading Apify/Gemini APIs.

### Batch 1 (10 restaurants)
1. french-meadow
2. hard-times-cafe
3. seward-cafe
4. francis-burger-joint
5. vegan-east
6. modern-times
7. lutunjis-palate
8. bole-ethiopian
9. everest-on-grand
10. namaste-cafe

### Batch 2 (10 restaurants)
11. himalayan-restaurant
12. foxy-falafel
13. tongue-in-cheek
14. amazing-thailand
15. glam-doll-donuts
16. seed-cafe
17. eureka-compass
18. crepe-and-spoon
19. pizza-luce
20. shish-mediterranean

### Batch 3 (10 restaurants)
21. the-dripping-root
22. afro-deli
23. common-roots-cafe
24. khyber-pass-cafe
25. crisp-and-green
26. wedge-table
27. wok-in-the-park
28. victors-1959
29. tori-ramen
30. red-cow

### Batch 4 (11 restaurants)
31. black-sheep-pizza
32. peninsula-malaysian
33. ngon-vietnamese
34. ipho-saigon
35. masu-sushi
36. world-street-kitchen
37. gandhi-mahal
38. galactic-pizza
39. brasa-premium-rotisserie
40. cafe-latte
41. may-day-cafe
42. salty-tart

## Execution Commands

### Run a single batch:
```bash
cd /home/ec2-user/clawd/projects/mpls-vegan-directory-v3

# Batch 1
for slug in french-meadow hard-times-cafe seward-cafe francis-burger-joint vegan-east modern-times lutunjis-palate bole-ethiopian everest-on-grand namaste-cafe; do
  echo "Processing $slug..."
  node scripts/process-all-apify.js $slug
  sleep 10
done
```

### Or use the batch processor:
```bash
# Process specific batch number
node scripts/batch-process.js 1  # Processes batch 1
node scripts/batch-process.js 2  # Processes batch 2
# etc
```

## Deployment Schedule
- After Batch 1: Commit + push (deploy first 10)
- After Batch 2: Commit + push (deploy next 10)
- After Batch 3: Commit + push (deploy next 10)
- After Batch 4: Commit + push (deploy final 11)

## Monitoring
- Check Apify credits: https://console.apify.com/account/billing
- Check Gemini API usage: https://aistudio.google.com/apikey
- Monitor Vercel builds: https://vercel.com/magic-wifi-money/mpls-vegan-directory-v3

## Progress Tracking
- [ ] Batch 1 (10 restaurants) - Est. 45-60 min
- [ ] Batch 2 (10 restaurants) - Est. 45-60 min
- [ ] Batch 3 (10 restaurants) - Est. 45-60 min
- [ ] Batch 4 (11 restaurants) - Est. 50-65 min

**Total time: ~3-4 hours** (can be done overnight or in background)
