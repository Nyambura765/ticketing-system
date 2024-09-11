"use client";
import React from 'react';

export default function Events() {
  const eventsData = [
    {
      title: "Women in 4IR",
      date: "March 10, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Hub, Nairobi",
      description: "Join us for a comprehensive event focusing on women's roles in the Fourth Industrial Revolution (4IR). Learn about how automation, AI, and IoT are shaping the future and how women are taking the lead.",
      keynote: "Keynote Speaker: Jane Doe - Head of AI Development at TechCorp",
      agenda: [
        "The impact of 4IR on women in tech",
        "Automation and future job roles",
        "How to lead in the 4IR revolution"
      ],
      workshop: {
        title: "4IR Coding Workshop",
        trainer: "Alice Mwangi",
        time: "2:00 PM - 3:30 PM",
        summary: "A hands-on workshop on programming for IoT devices."
      },
      networking: "Meet and greet session with other women leaders in 4IR",
      demo: {
        title: "Smart Factories Powered by IoT",
        presenter: "Sophia Kim",
        summary: "A demonstration of how IoT is revolutionizing industrial automation."
      },
      panel: {
        title: "Breaking Barriers in 4IR",
        participants: "Maria Johnson, Eve Okello, Linda Wanjiru",
        summary: "Panel discussion on leadership and innovation in the Fourth Industrial Revolution."
      }
    },
    {
      title: "Women in AI",
      date: "April 15, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "AI Labs, Lagos",
      description: "Explore the role of women in AI research and development. This event will cover key areas of machine learning, natural language processing, and the ethical challenges of AI.",
      keynote: "Keynote Speaker: Dr. Sarah Lee - AI Researcher at OpenAI",
      agenda: [
        "Introduction to AI and machine learning",
        "Opportunities for women in AI",
        "Ethical challenges and future outlook"
      ],
      workshop: {
        title: "Building AI Models",
        trainer: "Grace Achieng",
        time: "1:30 PM - 3:00 PM",
        summary: "An in-depth workshop on creating simple AI models using Python and TensorFlow."
      },
      networking: "Networking Lunch: Connect with AI professionals and researchers",
      demo: {
        title: "AI-Powered Personal Assistants",
        presenter: "Elizabeth Kariuki",
        summary: "A showcase of AI-driven personal assistants and their future applications."
      },
      panel: {
        title: "The Ethics of AI",
        participants: "Prof. Angela Njoroge, Dr. Susan Wright, Julia Nyaga",
        summary: "A deep dive into the ethical considerations of AI in modern society."
      }
    },
    {
      title: "Women in Blockchain",
      date: "May 5, 2024",
      time: "11:00 AM - 5:00 PM",
      location: "Blockchain Center, Cape Town",
      description: "This event focuses on how women are shaping the blockchain industry. Learn about blockchain applications, cryptocurrency, and decentralized technologies.",
      keynote: "Keynote Speaker: Esther Choi - Blockchain Developer at Binance",
      agenda: [
        "Blockchain 101: Understanding the basics",
        "Women-led projects in blockchain",
        "The future of decentralized technologies"
      ],
      workshop: {
        title: "Developing Smart Contracts",
        trainer: "Mary Kamau",
        time: "3:00 PM - 4:30 PM",
        summary: "A technical workshop on building and deploying smart contracts on the Ethereum blockchain."
      },
      networking: "Blockchain Networking Event: Meet fellow developers and enthusiasts",
      demo: {
        title: "Decentralized Finance (DeFi) Platforms",
        presenter: "Caroline Muthoni",
        summary: "Demonstrating the potential of DeFi in revolutionizing finance."
      },
      panel: {
        title: "Women in Crypto",
        participants: "Grace Wambui, Lucy Ochieng, Sandra Mutuku",
        summary: "A panel discussion on the role of women in the cryptocurrency space."
      }
    },
    {
      title: "Technology for Sustainable Development",
      date: "June 20, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "GreenTech Center, Accra",
      description: "Discover how technology is advancing sustainable development, with a focus on climate change, green energy, and eco-friendly innovations.",
      keynote: "Keynote Speaker: Dr. Sylvia Odhiambo - Environmental Technologist at UNEP",
      agenda: [
        "Green tech innovations",
        "Women in environmental technology",
        "Sustainability in the tech industry"
      ],
      workshop: {
        title: "Building Green Technology Solutions",
        trainer: "Angela Kariuki",
        time: "3:30 PM - 5:00 PM",
        summary: "A workshop on creating eco-friendly tech products."
      },
      networking: "Sustainability Networking: Connect with environmentalists and tech experts",
      demo: {
        title: "Solar-Powered Innovations",
        presenter: "Zainab Ali",
        summary: "A live demo of solar-powered gadgets for home and industrial use."
      },
      panel: {
        title: "Women Leading in Sustainable Tech",
        participants: "Fatima Mohamed, Ruth Akinyi, Pamela Mutiso",
        summary: "A discussion on the leadership roles of women in advancing sustainable technologies."
      }
    }
  ];

  return (
    <section className="events py-20" id="events">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-12">Upcoming Events</h2>

        {eventsData.map((event, index) => (
          <div key={index} className="event mb-12 bg-white shadow-lg p-8 rounded-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-700">{event.title}</h3>
            <p className="text-gray-600 mt-2">
              <strong>Date:</strong> {event.date} | <strong>Time:</strong> {event.time} | <strong>Location:</strong> {event.location}
            </p>
            <p className="mt-4">{event.description}</p>

            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-green-600">Keynote Speaker</h4>
              <p>{event.keynote}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-green-600">Agenda</h4>
              <ul className="list-disc list-inside text-left mx-auto max-w-lg">
                {event.agenda.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-green-600">Workshop</h4>
              <p><strong>{event.workshop.title}</strong> with {event.workshop.trainer} | Time: {event.workshop.time}</p>
              <p>{event.workshop.summary}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-green-600">Networking Session</h4>
              <p>{event.networking}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-green-600">Tech Demo</h4>
              <p><strong>{event.demo.title}</strong> by {event.demo.presenter}</p>
              <p>{event.demo.summary}</p>
            </div>

            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-green-600">Panel Discussion</h4>
              <p><strong>{event.panel.title}</strong></p>
              <p>{event.panel.participants}</p>
              <p>{event.panel.summary}</p>
            </div>

            <a
              href="#booking"
              className="bg-green-600 text-white py-2 px-4 mt-8 inline-block rounded-md"
            >
              Book Tickets
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
