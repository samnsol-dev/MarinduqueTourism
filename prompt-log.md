# Lab Activity #4 — Prompt, Observe, Refine

## Project: Marinduque Tourism Guide

Course: Web Systems and Technologies Innovation sector: Tourism & Cultural Innovation

## Task 1 — Sector Selection

Sector: Tourism & Cultural Innovation

Local Challenge: Tourists may have difficulty finding information about tourist attractions and cultural destinations in Marinduque in one convenient place.

Target Users: Local tourists, visitors, and people who want to explore Marinduque.

Proposed Project: Marinduque Tourism Guide

Key Features:

1. Tourist Attractions — Displays local destinations with short descriptions.
2. Category Filters — Allows users to browse attractions by category, such as beaches, nature, and cultural sites.
3. Saved Places — Allows users to select attractions they want to visit.

Project Concept: The Marinduque Tourism Guide is a simple website designed to help tourists discover local attractions and cultural destinations in Marinduque. It provides organized destination information and basic interactive features to make planning a visit easier.

## Task 2 — Zero-Shot Prompting

Objective:

To create a simple, responsive Marinduque Tourism Guide webpage featuring tourist attraction cards with short descriptions and location notes, a search box, category filters for browsing destinations, and relevant photographs. The webpage should use HTML, CSS, and JavaScript, with working search and filtering functions to help tourists discover local attractions.

Exact Prompt:

 Create a simple webpage for a Marinduque Tourism Guide that helps tourists discover local attractions in Marinduque. Include a title, a few tourist attractions with short descriptions, and basic CSS styling. Use HTML, CSS, and JavaScript.

Actual Copilot Output:

I’ll check the existing workspace files first so the guide fits the project’s current structure, then I’ll build a small, usable attractions page and verify it opens cleanly.

The workspace appears nearly empty, so I’m checking the `outputs` folder for the intended landing spot before creating the page. I’ll keep it dependency-free and make JavaScript do a small practical job, such as filtering attractions.

There are no existing app files or assets to preserve, and `outputs` is empty. I’m creating a self-contained static guide there: attraction cards with practical location notes, a search box and category filters, responsive styling, and destination-appropriate photography.

AI Output Saved At: outputs/task2-zero-shot

What Worked:

Copilot planned useful features, such as attraction cards, search, and category filters, that can help tourists find destinations.

What Needs Improvement:

The images are inaccurate and may not show the actual tourist destinations in Marinduque. The destination information and interactive features also need to be checked.

Next Action / Verification:

I will open the generated webpage in a browser, test the search and category filters, verify the destination information, and replace inaccurate images with appropriate ones.

## Task 3 — Improve: Anatomy of a Prompt

Objective:

To improve the Marinduque Tourism Guide webpage by giving GitHub Copilot clearer instructions about the required features, design, technologies, and expected results.

Exact Prompt:

 Act as an experienced frontend web developer and improve my existing Marinduque Tourism Guide webpage to make it more useful, organized, and responsive for local and visiting tourists who want to explore Marinduque, Philippines. Create a single-page tourism website that presents local attractions through cards containing destination names, short descriptions, and location notes. Include a search box that filters attractions based on the user's input and category filters that allow users to browse destinations such as beaches, nature, and cultural attractions. Use semantic HTML, CSS, and vanilla JavaScript only. Do not use external frameworks, backend services, databases, or APIs. Keep the project within the required scope of one responsive webpage with two or three core features. Reuse the existing project structure when appropriate, but preserve my original Zero-Shot output and save the improved version separately in the outputs folder. Provide the complete HTML, CSS, and JavaScript files needed for the webpage. Use relevant photographs that accurately represent tourist destinations in Marinduque, and ensure that destination information is appropriate and not presented as fact if it is unverified. Make sure the attraction cards display clearly, the search and category filters function correctly, and the layout works on both desktop and mobile screens. After generating the code, explain which files you created or changed and provide simple steps to test the webpage. Do not claim that any feature works unless it has been tested.

Actual Copilot Output:

I’ve got the photo provenance now: each image is an actual Marinduque beach, Mount Malindig, Boac Cathedral, or Moriones image, with author and license links available. I’m adding the three few-shot files as an independent page, with four categories/filter states and live search that combine rather than override one another.

AI Output Saved At: outputs/task3-structured

What Worked:

The improved prompt gives Copilot clearer instructions about the target users, required features, technologies, and design. It also specifies that the original Zero-Shot output should be preserved, making it easier to compare the two versions.

What Needs Improvement:

The generated webpage still needs to be checked to confirm that the search and category filters work correctly, the layout is responsive, and the images and destination information are accurate.

Next Action / Verification:

I will compare the improved webpage with the Zero-Shot version, test the search and category filters, check the layout on desktop and mobile screens, and verify the destination information and images. I will save the improved files separately and document the actual test results.

Comparison with Task 2:

Compared with the Zero-Shot prompt, the structured prompt provides more details about the target users, required features, technical limitations, and expected results. It also includes acceptance criteria, which make it easier to check whether the generated webpage meets the requirements.

## Task 4A — Few-Shot Prompting

Objective:

To improve the consistency of tourist attraction information by giving GitHub Copilot examples to follow when generating content for the Marinduque Tourism Guide.

Exact Prompt:

 Act as a frontend web developer working on my Marinduque Tourism Guide webpage. I want you to add tourist attractions using the same format for every destination. Follow these examples:

 Example 1:

 Destination: Poctoy White Beach.

 Category: Beach.

 Description: A beach destination in Torrijos, Marinduque, known for its coastal scenery.

 Example 2:

 Destination: Boac Cathedral.

 Category: Cultural Attraction.

 Description: A historic church located in Boac, Marinduque.

 Using the same format, generate four additional tourist attractions in Marinduque, each with a destination name, category, and short description. Use the same consistent structure for all entries and integrate them into the existing attraction cards if appropriate. Use HTML, CSS, and vanilla JavaScript, preserve the existing project features, and do not overwrite my original Zero-Shot output. Do not invent destination details; clearly identify any information that needs verification.

Actual Copilot Output:

The new page is in place. All nine cards use the same generated markup; the four added destinations are Maniwaya Island, Tres Reyes Islands, Bathala Caves, and Mount Malindig, alongside the examples and prior guide entries. I’m checking the new files for diagnostics now, then I’ll validate the card count and filter wiring.

AI Output Saved At:outputs/task4a-fewshout

What Worked:

Providing examples helped guide Copilot toward a consistent format for the attraction names, categories, and descriptions. This makes the information easier to organize and display on the tourism webpage.

What Needs Improvement:

The generated attraction names and descriptions still need to be checked for accuracy. Following the examples can help with formatting, but it does not guarantee that every tourism detail is correct. The images should also be checked to make sure they accurately represent the destinations.

Next Action / Verification:

I will compare Copilot’s response with the examples, verify the attraction names and descriptions, and test whether the new entries display correctly on the webpage. I will also check that the existing search and category filters continue to work.

## Task 4B — Role Assignment

Objective:

To evaluate how assigning Copilot a specific role as a frontend accessibility reviewer can help identify problems and suggest improvements for the Marinduque Tourism Guide webpage.

Exact Prompt:

 Act as a frontend accessibility reviewer. Examine my Marinduque Tourism Guide webpage. Identify problems involving HTML semantics, keyboard access, labels, and visual clarity. Recommend targeted improvements without changing the project's scope. Keep the project limited to one responsive webpage using HTML, CSS, and vanilla JavaScript. Check whether the attraction cards, search box, and category filters are clear and accessible to users. Explain the problems you find and suggest specific improvements. Do not claim that a problem exists unless you can identify it in the existing code. Do not overwrite my original Zero-Shot output.

Actual Copilot Output:

The copied variant now has a skip link, proper aside semantics, one live result-count announcement instead of a live-updating card collection, wrapped mobile filters, larger text, darker accent text, and a labeled unavailable-photo state. I’m running the focused file diagnostics first, then I’ll test the keyboard/filter behavior in the browser.

AI Output Saved At:outputs/task4b-role

What Worked:

Assigning Copilot the role of a frontend accessibility reviewer gave it a clear perspective for examining the webpage. The prompt focused its review on HTML semantics, keyboard access, labels, and visual clarity, making the feedback more specific to the website's usability.

What Needs Improvement:

The suggestions still need to be checked against the actual code. Some recommendations may not apply to the current webpage, and accessibility problems cannot be considered fixed until the necessary changes are made and tested.

Next Action / Verification:

I will compare Copilot's recommendations with the existing webpage, apply suitable improvements, and test the search box, category filters, keyboard navigation, and responsive layout. I will also check whether the changes improve accessibility without adding features outside the project's scope.

## Task 5 — Analyze Structured Reasoning and Refinement

Objective:

To analyze my Marinduque Tourism Guide, identify possible implementation problems, and improve the webpage through a specific correction and testing.

Exact Prompt:

 Review my Marinduque Tourism Guide webpage against the original project requirements. Check whether the attraction cards display properly, whether the search box and category filters work correctly, whether the HTML uses appropriate semantic elements, and whether the layout is usable on desktop and mobile screens. Identify the two most important implementation issues based on my existing HTML, CSS, and JavaScript code. For each issue, explain the problem and recommend the smallest appropriate correction. Provide the specific code changes needed and simple steps to test them. Also check whether the attraction images and destination information are appropriate, and identify any details that need verification. Keep the project limited to one responsive webpage using HTML, CSS, and vanilla JavaScript. Do not add a backend, database, or external APIs. Do not claim that an issue exists or has been fixed unless the code or testing supports that conclusion. Do not overwrite my original Zero-Shot output.

Actual Copilot Output:

Copilot reviewed the Marinduque Tourism Guide website and identified two areas for improvement: making the search box and category filters work together correctly, and improving the website’s responsiveness and accessibility on mobile devices. It recommended combining the search and category conditions in one filtering function and using responsive CSS, clear labels, and visible keyboard focus indicators. The suggested corrections should be tested by searching for different destinations, selecting categories, checking results with no matches, and viewing the website on desktop and mobile screens. These improvements can make the website easier to use and more like a real tourism website while keeping the project focused on HTML, CSS, and vanilla JavaScript.

What Worked:

The prompt clearly explained what Copilot needed to review and asked for the two most important implementation issues. It also requested specific corrections and testing steps, which helps keep the improvements focused on the original project requirements.

What Needs Improvement:

The webpage still needs to be checked to confirm whether the search and category filters work correctly on the actual project. The attraction images and destination information also need verification because some images may not accurately represent the destinations. Possible problems should be confirmed in the code before making changes.

Next Action / Verification:

The appropriate improvement is to check the existing search and category-filter functions, correct any confirmed problems, and test the results. The webpage should also be checked at desktop and mobile screen sizes, and the attraction images should be reviewed for accuracy.

Selected Correction:

A suitable correction is to ensure that the search box and category filters work together, so visitors can search for an attraction while browsing a selected category. This should only be applied if checking the existing code shows that the combined filtering does not work correctly.

Verification Result:

The correction has not yet been verified because the actual project code and test results are not available in this conversation. The result should not be reported as successful until the search and category filters have been tested together in the webpage.

## Task 6 — Final Comparison

| Technique           | Observation                                                                                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Zero-Shot Prompting | The initial prompt gave Copilot a general idea of the tourism webpage. It planned attraction cards, search, category filters, responsive styling, and photographs, but the images were inaccurate and the destination information and interactive features still needed checking.    |
| Structured Prompt   | The structured prompt provided clearer instructions about the target users, required features, technologies, design, and expected results. Copilot also described work on photo provenance and combined search and category filters, but these features still need testing.          |
| Few-Shot Prompting  | Providing examples helped guide Copilot toward a consistent format for attraction names, categories, and descriptions. Copilot reported adding four destinations and using nine cards, but the destination details and display still need verification.                              |
| Role Assignment     | Assigning Copilot the role of a frontend accessibility reviewer led to changes such as a skip link, clearer semantics, a result-count announcement, mobile filter wrapping, larger text, and a labeled unavailable-photo state. The keyboard and filter behavior still need testing. |
| Structured Analysis | The prompt asks Copilot to identify two important issues and recommend corrections. The actual analysis response and verification results have not yet been recorded, so no correction can be considered verified.                                                                   |

## Final Reflection

This activity helped me understand that the way a prompt is written affects the guidance Copilot receives. The Zero-Shot prompt provided a starting point, while the structured prompt gave clearer requirements for the tourism webpage. Few-Shot prompting helped demonstrate a consistent format for destination information, and role assignment focused attention on accessibility. Structured analysis provides a way to identify possible problems and plan targeted corrections. I also learned that generated content and code need to be checked instead of being accepted automatically. The attraction images and destination information need verification, and the search, category filters, keyboard behavior, and responsive layout should be tested before the webpage is considered complete.