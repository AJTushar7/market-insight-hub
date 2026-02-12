import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
  popular?: boolean;
}

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('statsSection') statsSection!: ElementRef;

  statsAnimated = signal(false);

  stats: Stat[] = [
    { value: '15', suffix: 'K+', label: 'Happy Clients' },
    { value: '95', suffix: '%', label: 'Success Rate' },
    { value: '8', suffix: '+', label: 'Years Experience' },
    { value: '500', suffix: '+', label: 'Stock Recommendations' },
  ];

  services: Service[] = [
    {
      icon: 'crown',
      title: 'Premium Advisory',
      description:
        'Get exclusive stock recommendations from our SEBI-registered research analysts with detailed entry, target, and stop-loss levels.',
      link: '/services/premium-advisory',
      popular: true,
    },
    {
      icon: 'graduation',
      title: 'Stock Market Courses',
      description:
        'Learn technical analysis, fundamental analysis, and trading strategies through our comprehensive video courses.',
      link: '/courses',
    },
    {
      icon: 'chart',
      title: 'Portfolio Review',
      description:
        'Get expert analysis of your existing portfolio with personalized rebalancing recommendations.',
      link: '/services/portfolio-review',
    },
    {
      icon: 'target',
      title: 'Single Share Advice',
      description:
        'Confused about a specific stock? Get detailed Buy/Sell/Hold advice for any stock of your choice.',
      link: '/services/single-share',
    },
    {
      icon: 'users',
      title: 'Offline Workshops',
      description:
        'Join our face-to-face intensive workshops for hands-on learning experience with market experts.',
      link: '/services/workshops',
    },
    {
      icon: 'book',
      title: 'E-Books & Resources',
      description:
        'Access our premium e-books covering advanced trading strategies and market psychology.',
      link: '/services/ebooks',
    },
  ];

  steps: Step[] = [
    {
      number: 1,
      title: 'Choose Your Plan',
      description:
        'Select from our range of services that best suits your investment goals and risk appetite.',
      icon: 'select',
    },
    {
      number: 2,
      title: 'Complete KYC',
      description:
        'Complete a quick verification process as required by SEBI regulations for research advisory services.',
      icon: 'verify',
    },
    {
      number: 3,
      title: 'Join Premium Group',
      description:
        'Get instant access to our exclusive WhatsApp group with real-time stock recommendations.',
      icon: 'join',
    },
    {
      number: 4,
      title: 'Start Earning',
      description:
        'Execute trades in your own Demat account and watch your portfolio grow with our guidance.',
      icon: 'profit',
    },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content:
        "I've been with Rising Stock for 2 years now. Their research-based approach has helped me grow my portfolio by 45%. The team is professional and their guidance is invaluable.",
      avatar: 'RK',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'IT Professional',
      content:
        'As a beginner, I was scared to enter the stock market. The courses here gave me confidence and their advisory services helped me make informed decisions.',
      avatar: 'PS',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Doctor',
      content:
        "Very transparent and professional. They don't make unrealistic promises and always provide proper risk disclosure. Highly recommend for long-term investors.",
      avatar: 'AP',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      role: 'CA Professional',
      content:
        'The fundamental analysis course was excellent. Now I can analyze stocks on my own. Great value for money!',
      avatar: 'SR',
      rating: 4,
    },
  ];

  faqs: FAQ[] = [
    {
      question: 'What kind of services do you provide?',
      answer:
        'We provide short to long-term investment advisory services including premium stock recommendations, portfolio reviews, educational courses, and personalized investment guidance. All our services are backed by thorough research and analysis.',
      isOpen: false,
    },
    {
      question: 'Are you SEBI registered?',
      answer:
        'Yes, we are a SEBI Registered Research Analyst (Registration No: INH000XXXXXX). This ensures that our services comply with all regulatory requirements and provide you with trustworthy investment guidance.',
      isOpen: false,
    },
    {
      question: 'How do I receive stock recommendations?',
      answer:
        'After subscribing to our services, you will be added to our exclusive WhatsApp group where all recommendations are shared in real-time. You will also receive updates via email and our mobile app.',
      isOpen: false,
    },
    {
      question: 'Do you provide execution services?',
      answer:
        'No, we do not provide execution services. We only provide research-based recommendations. You need to execute trades in your own Demat account based on your convenience and individual capacity.',
      isOpen: false,
    },
    {
      question: 'What is your refund policy?',
      answer:
        'Due to the nature of advisory services, refunds are generally not applicable once the service has been activated. However, specific terms may vary by service. Please read our refund policy for detailed information.',
      isOpen: false,
    },
  ];

  // Market ticker data simulation
  tickerData = [
    { symbol: 'NIFTY 50', price: '22,475.85', change: '+0.65%', isPositive: true },
    { symbol: 'SENSEX', price: '73,961.31', change: '+0.58%', isPositive: true },
    { symbol: 'BANKNIFTY', price: '48,234.50', change: '-0.23%', isPositive: false },
    { symbol: 'RELIANCE', price: '2,876.45', change: '+1.23%', isPositive: true },
    { symbol: 'TCS', price: '3,891.20', change: '+0.45%', isPositive: true },
    { symbol: 'INFY', price: '1,567.80', change: '-0.34%', isPositive: false },
    { symbol: 'HDFC BANK', price: '1,654.30', change: '+0.89%', isPositive: true },
    { symbol: 'ICICI BANK', price: '1,123.45', change: '+0.67%', isPositive: true },
  ];

  ngOnInit() {
    // Any initialization logic
  }

  ngAfterViewInit() {
    // Intersection observer for stats animation
    this.setupStatsObserver();
  }

  setupStatsObserver() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.statsAnimated()) {
              this.statsAnimated.set(true);
            }
          });
        },
        { threshold: 0.5 },
      );

      // Observer will be set up after view init
      setTimeout(() => {
        if (this.statsSection?.nativeElement) {
          observer.observe(this.statsSection.nativeElement);
        }
      }, 100);
    }
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  scrollToServices() {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  }
}
