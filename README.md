


<!-- ABOUT THE PROJECT -->
## About The Project

![enter image description here](https://i.imgur.com/rZGgsqr.png)
A  functional replica of Google's search page, you can use it for searches. Styled with <a href="https://tailwindcss.com/">Tailwind CSS</a> to  Rapidly build and look as close as possible to current google search page, the search results are pulled using Googles <a href="https://developers.google.com/custom-search">Programmable Search Engine</a> and it was build using <a herf="https://nextjs.org/">Next.js </a>the react framework. 

Project is live here https://google-clone-p8mn37r8a-cosmicwanderer7.vercel.app/

Please do not spam searches.




### Built With


* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Programmable Search Engine](https://programmablesearchengine.google.com/about/)
* [Yarn](https://yarnpkg.com/)


<p align="right">(<a href="#about-the-project">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started



### Prerequisites

This are things you need to use the web app and how to install them.
* yarn
  ```sh
  npm install --global yarn 
  yarn dev   // to run local server
### Installation



1. Get a free API_KEY at [https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key](https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key)
   Get ( Search engine ID ) CONTEXT_KEY at https://cse.google.com/cse/create/new


3. Clone the repo
   ```sh
   git clone https://github.com/cosmicwanderer7/google-clone.git
   ```
   
4. Add Next
   ```sh
   yarn add next react react-dom
5. Install all dependencies
   ```sh
   yarn 
6. Create a .env.local file to store your api keys
   ```js
   API_KEY = ' ' //API Key  https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
   CONTEXT_KEY = ' ' // Context Key  https://cse.google.com/cse/create/new ( Search engine ID )
7. Use dummy data for testing
  `const  useDummyData  =  false;`
  //true for development testing (mock results) change it in search.js
  (Free version of google search api has a quota of 100 search results per day  use dummy data so that you don't exhaust the quota)
8. To run on local host use
   ```sh
   yarn dev //starts a local server

<p align="right">(<a href="#about-the-project">back to top</a>)</p>







<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. 

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes 
5. Push to the Branch 
6. Open a Pull Request

<p align="right">(<a href="#about-the-project">back to top</a>)</p>





<!-- CONTACT -->
## Contact
  yewaleprithvi2003@gmail.com Gmail <br>
 [@PrithviYewale](https://twitter.com/PrithviYewale) Twitter <br>
 [@cosmic.wanderer._](https://www.instagram.com/cosmic.wanderer._/) Instagram <br>
 
                    

         

Project Link: [https://github.com/cosmicwanderer7/google-clone](https://github.com/cosmicwanderer7/google-clone)

<p align="right">(<a href="#about-the-project">back to top</a>)</p>




