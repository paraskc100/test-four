import { Component } from '@angular/core';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsitemComponent {
  newsItems: any = [
    {
      "newsId": 1,
      "headline": "New Study Shows Benefits of Yoga for Reducing Back Pain",
      "summary": "A new study has found that practicing yoga regularly can help reduce back pain, improving overall physical health and well-being.",
      "imageLink": "https://example.com/images/yoga.jpg",
      "datePosted": "2023-03-25",
      "likeCount": 1024
    },
    {
      "newsId": 2,
      "headline": "NASA's Perseverance Rover Collects First Rock Sample on Mars",
      "summary": "NASA's Perseverance rover has successfully collected its first rock sample on Mars, marking a major milestone in the search for signs of ancient life on the Red Planet.",
      "imageLink": "https://example.com/images/mars.jpg",
      "datePosted": "2023-03-22",
      "likeCount": 1589
    },
    {
      "newsId": 3,
      "headline": "New Study Links Coffee Consumption to Lower Risk of Heart Disease",
      "summary": "A new study has found that drinking coffee in moderation can help reduce the risk of heart disease, providing yet another reason to enjoy a cup of joe in the morning.",
      "imageLink": "https://example.com/images/coffee.jpg",
      "datePosted": "2023-03-18",
      "likeCount": 734
    },
    {
      "newsId": 4,
      "headline": "Apple Unveils New Lineup of iPads and MacBooks at Spring Event",
      "summary": "Apple has announced a new lineup of iPads and MacBooks at its annual Spring event, featuring faster processors, improved cameras, and other new features.",
      "imageLink": "https://example.com/images/apple.jpg",
      "datePosted": "2023-03-15",
      "likeCount": 276
    },
    {
      "newsId": 5,
      "headline": "New Study Shows Benefits of Gardening for Mental Health",
      "summary": "A new study has found that spending time in a garden or green space can have significant benefits for mental health, improving mood and reducing stress levels.",
      "imageLink": "https://example.com/images/garden.jpg",
      "datePosted": "2023-03-12",
      "likeCount": 911
    },
    {
      "newsId": 6,
      "headline": "Google Launches New Privacy Features for Search and Maps",
      "summary": "Google has announced a new set of privacy features for its Search and Maps products, allowing users to control more of their personal data and limiting the amount of data collected.",
      "imageLink": "https://example.com/images/google.jpg",
      "datePosted": "2023-03-08",
      "likeCount": 155
    },
    {
      "newsId": 7,
      "headline": "New Study Shows Benefits of Walking for Overall Health",
      "summary": "A new study has found that walking regularly can have significant benefits for overall health, improving cardiovascular health, reducing the risk of chronic disease, and improving mood.",
      "imageLink": "https://example.com/images/walking.jpg",
      "datePosted": "2023-03-05",
      "likeCount": 2048
    }
  ]  
}
