import React from "react";
import "../styles/Cards.css";

export default function Cards() {
  const cardsArr = [
    {
      id: 1,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
      title: "Introducing you all to EdYoda - www.edyoda.com",
      author: "Arman Ahmed",
      date: "05 Jul 2019",
      description:
        "Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.",
    },
    {
      id: 2,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg",
      title: "Learn cloud computing - an introduction",
      author: "EdYoda",
      date: "11 Jul 2019",
      description:
        "If you learn cloud computing then you can make things much easier for your projects. You do not have to rely on multiple hard drives or data storage devices for with cloud...",
    },
    {
      id: 3,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg",
      title: "Ace your Soft Skills - Tips to crack the job interview",
      author: "Pitanjal Dutta",
      date: "05 Jul 2019",
      description:
        "Soft skills are seen to be as important as your technical skill set. When an organisation is hiring. soft skills is given a lot of weightage and thus becomes a very important are...",
    },
    {
      id: 4,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg",
      title: "Master your General Aptitude Job Interview",
      author: "Pitanjal Dutta",
      date: "05 Jul 2019",
      description:
        "A general aptitude becomes very important. when you apply for a job in a tech company. You might be highly skilled in your subject domain. However. these basic...",
    },
    {
      id: 5,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/react-native-vs-flutter.png",
      title: "React Native Vs Flutter: Breaking the confusion...",
      author: "EdYoda",
      date: "12 Aug 2019",
      description:
        "The two biggest social platforms have created a buzz in the application development industry. React Native by Facebook and Flutter by Google are the latest two...",
    },
    {
      id: 6,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png",
      title: "Why do Database Systems Exist?",
      author: "Pitanjal Dutta",
      date: "05 Jul 2019",
      description:
        "Wondering why database Management Systems like MySQL, NOSQL, MSSQL, Oracle etc. MongoDB form the fundamental blocks behind working with Data?...",
    },
    {
      id: 7,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg",
      title: "edYoda Meetup #01: A Date with Cloud",
      author: "Ashish Pandey",
      date: "05 Jul 2019",
      description:
        "I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYodA. Here, I recount my experience in organizing the very first in the series..",
    },
    {
      id: 8,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
      title: "Amazon Web Services (AWS) Cloud Day-...",
      author: "Kalyan Mahalingam",
      date: "05 Jul 2019",
      description:
        "It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note. need to investigate the tactics behind the 5-star hotels keeping the plates so...",
    },
    {
      id: 9,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg",
      title: "Getting started with Artificial Intelligence",
      author: "EdYoda",
      date: "08 Jul 2019",
      description:
        "Were rapidly moving towards a day and age where almost everything can be controlled by machines and one of the most revolutionary moves has been the advent of...",
    },
    {
      id: 10,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/the-new-way-to-encrypt-cloud-data-cloud-cryptography.jpg",
      title: "The New way to Encrypt Cloud Data- Cloud...",
      author: "EdYoda",
      date: "23 Jul 2019",
      description:
        "Distributed computing is one of the well-known subjects of the present world. The internet has begun driving all these new innovations. The internet was structured right of...",
    },
    {
      id: 11,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/understanding-devops.jpg",
      title: "Understanding DevOps",
      author: "EdYoda",
      date: "23 Jul 2019",
      description:
        "DevOps is a term derives after combining development and operation for a common purpose driving the development of operational processes. It automates...",
    },
    {
      id: 12,
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-computing-an-umbrella-term-that-enables-digital-transformation.jpg",
      title: "Cloud Computing - An Umbrella Term that enable...",
      author: "EdYoda",
      date: "23 Jul 2019",
      description:
        "Innovation and us holds a bond that compliments each other. Digital transformations without cloud computing as its partner are like a half-built bridge. As it empowers us...",
    },
  ];
  const cards = cardsArr.map((item) => {
    return (
      <div className="blog-card">
        <img src={item.thumbnail} className="blog-img" />
        <div className="blog-content">
          <h2 className="blog-heading">{item.title}</h2>
          <div className="author-details">
            <span className="author-name">{item.author}</span>
            <span className="blog-date"> | {item.date}</span>
          </div>
          <p className="blog-desc">{item.description}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <section className="cards">{cards}</section>
    </>
  );
}
