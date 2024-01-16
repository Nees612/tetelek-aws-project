class Article {
    title: string;
    author: string;
    description: string;
    link: string;
  
    constructor(title: string, author: string, description: string, link: string) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.link = link;
    }

}

export function GetArticles(){
    const articleList: Article[] = [
        new Article(
        "Exploring the Benefits of Regular Exercise",
        "Fitness Enthusiast",
        "Check out this interesting article on the benefits of regular exercise. It covers the physical, mental, and emotional advantages of incorporating regular physical activity into your daily routine.",
        "article1.html"
        ),
        // Add more articles as needed
        new Article(
        "The Art of Healthy Eating",
        "Nutrition Expert",
        "Discover the importance of maintaining a balanced and nutritious diet for overall well-being. Learn tips and tricks for creating delicious and healthy meals.",
        "article2.html"
        ),
        new Article(
        "Mindfulness Meditation for Beginners",
        "Wellness Guru",
        "Embark on a journey of mindfulness meditation. This article provides simple techniques and guidance for beginners looking to incorporate mindfulness into their daily lives.",
        "article3.html"
        ),
        new Article(
        "The Impact of Quality Sleep on Productivity",
        "Sleep Specialist",
        "Explore the connection between quality sleep and increased productivity. Learn about the benefits of establishing healthy sleep habits for a more productive lifestyle.",
        "article4.html"
        ),
        new Article(
        "Green Living: Simple Steps to a Sustainable Lifestyle",
        "Environmental Advocate",
        "Discover practical and eco-friendly tips for adopting a sustainable lifestyle. This article highlights simple steps you can take to reduce your environmental footprint.",
        "article5.html"
        ),
        new Article(
            "Exploring the Benefits of Regular Exercise",
            "Fitness Enthusiast",
            "Check out this interesting article on the benefits of regular exercise. It covers the physical, mental, and emotional advantages of incorporating regular physical activity into your daily routine.",
            "article1.html"
            ),
            // Add more articles as needed
            new Article(
            "The Art of Healthy Eating",
            "Nutrition Expert",
            "Discover the importance of maintaining a balanced and nutritious diet for overall well-being. Learn tips and tricks for creating delicious and healthy meals.",
            "article2.html"
            ),
            new Article(
            "Mindfulness Meditation for Beginners",
            "Wellness Guru",
            "Embark on a journey of mindfulness meditation. This article provides simple techniques and guidance for beginners looking to incorporate mindfulness into their daily lives.",
            "article3.html"
            ),
            new Article(
            "The Impact of Quality Sleep on Productivity",
            "Sleep Specialist",
            "Explore the connection between quality sleep and increased productivity. Learn about the benefits of establishing healthy sleep habits for a more productive lifestyle.",
            "article4.html"
            ),
            new Article(
            "Green Living: Simple Steps to a Sustainable Lifestyle",
            "Environmental Advocate",
            "Discover practical and eco-friendly tips for adopting a sustainable lifestyle. This article highlights simple steps you can take to reduce your environmental footprint.",
            "article5.html"
            ),
    ];

    return articleList;
}

export function GetTopics(){
    const topicList: string[] = [
        "Fitness",
        "Nutrition",
        "Mindfulness",
        "Sleep",
        "Sustainability",
        "Healthy Aging",
        "Mental Wellness",
        "Wellness",
        "Exercise",
        "Healthy Eating",
        "Meditation",
        "Sleep Health",
        "Environmentalism",
        "Senior Fitness",
        "Stress Management",
        "Well-being",
        "Cardiovascular Health",
        "Balanced Diet",
        "Mindful Living",
        "Insomnia",
        "Green Living",
        "Cognitive Health",
        "Emotional Well-being",
        "Workout Routines",
        "Nutrient-rich Recipes",
        "Stress Reduction",
        "Sleep Hygiene",
        "Eco-friendly Practices",
        "Longevity",
        "Coping Strategies",
        "Physical Health",
        "Superfoods",
        "Mind-Body Connection",
        "Sleep Patterns",
        "Sustainable Choices",
        "Healthy Aging Habits",
        "Positive Psychology",
        "Strength Training",
        "Dietary Supplements",
        "Relaxation Exercises",
        "Napping Benefits",
        "Zero Waste Lifestyle",
        "Renewable Energy",
        "Mental Health Advocacy",
    ];
    
    return topicList;
}