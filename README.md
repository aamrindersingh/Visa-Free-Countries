# Visa Explorer

Visa Explorer is a web application designed to help travelers quickly determine which countries offer visa-free or visa on arrival access based on their selected country.

## Overview

Visa Explorer allows users to select their country from a dropdown menu. Based on this selection, the application fetches and displays a list of countries where travelers can enjoy visa-free access or obtain a visa on arrival. For each destination, the site dynamically creates a flashcard that includes:
- The country's flag
- Country name and code
- Capital city
- Population statistics
- Languages spoken
- Currency information
- Visa status (Visa Free or Visa on Arrival)

This integrated approach enables travelers to make informed decisions quickly without the need to search multiple sources.

## Features

- **Dynamic Country Selection:** Choose your country from a dropdown menu to receive tailored travel information.
- **Real-Time Data Fetching:** Retrieves live data using multiple APIs to ensure the information is current.
- **Comprehensive Flashcards:** Each flashcard contains detailed information about the destination, including flag imagery and vital stats.
- **User-Friendly Interface:** Clean design and intuitive navigation make it easy to use.
- **API Integration:** Seamlessly combines data from several APIs to provide a complete picture of travel options.

## APIs Used

- **Rough Sun API:**  
  Provides visa-related information, such as visa-free (VR) and visa on arrival (VOA) data for countries.  
  _Example endpoint:_ `https://rough-sun-2523.fly.dev/country/{countryCode}`

- **Flag API (FlagCDN):**  
  Supplies high-quality images of country flags.  
  _Example URL:_ `https://flagcdn.com/w320/{countryCode}.png`

- **RestCountries API:**  
  Offers detailed country information including capital, population, languages, and currencies.  
  _Example endpoint:_ `https://restcountries.com/v3.1/alpha/{countryCode}`

## Technologies Used

- **HTML:** Structures the web page.
- **CSS:** Styles and lays out the user interface.
- **JavaScript:** Handles API requests, processes responses, and dynamically updates the UI.

## Real Life Problem Solved

Traveling internationally can be challenging due to:
- **Complex Visa Requirements:**  
  Travelers often struggle to quickly determine if they can enter a country visa-free or obtain a visa on arrival. This uncertainty can lead to wasted time and last-minute complications.
  
- **Scattered Information:**  
  Visa details and essential country data (like capital, population, languages, and currencies) are usually spread across multiple sources. Visa Explorer aggregates this data into one easy-to-use platform, streamlining the travel planning process.
  
- **Time-Consuming Research:**  
  Instead of manually searching for accurate and up-to-date information, users can simply select their country and view all the relevant details in one place. This saves time and reduces the stress associated with planning international travel.
  
- **Risk of Travel Disruptions:**  
  Having accurate visa information helps avoid unexpected travel hurdles, ensuring that users can plan their trips confidently and reduce the risk of entry issues at borders.

By addressing these challenges, Visa Explorer makes international travel planning simpler, faster, and more reliable.
