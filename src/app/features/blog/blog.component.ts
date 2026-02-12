import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Blog & Insights</h1>
        <p>Stock market insights, analysis, and educational content.</p>
      </div>
    </section>

    <section class="blog-content">
      <div class="container">
        <div class="blog-grid">
          @for (post of posts; track post.slug) {
            <a [routerLink]="['/blog', post.slug]" class="blog-card">
              <div
                class="blog-thumbnail"
                [style.background]="'linear-gradient(135deg, ' + post.color + ' 0%, #21262D 100%)'"
              >
                <span class="blog-category">{{ post.category }}</span>
              </div>
              <div class="blog-content-inner">
                <div class="blog-meta">
                  <span class="blog-date">{{ post.date }}</span>
                  <span class="blog-read-time">{{ post.readTime }} min read</span>
                </div>
                <h3>{{ post.title }}</h3>
                <p>{{ post.excerpt }}</p>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .page-hero {
        padding: $space-16 0;
        background: $bg-secondary;
        text-align: center;

        h1 {
          @include heading-1;
          margin-bottom: $space-4;
        }
        p {
          @include body-large;
          color: $text-secondary;
        }
      }

      .blog-content {
        @include section-padding;
      }

      .blog-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: $space-6;

        @include sm {
          grid-template-columns: repeat(2, 1fr);
        }
        @include lg {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .blog-card {
        @include card;
        padding: 0;
        overflow: hidden;
        text-decoration: none;

        &:hover {
          text-decoration: none;
          transform: translateY(-4px);
          box-shadow: $shadow-xl;
        }
      }

      .blog-thumbnail {
        height: 160px;
        position: relative;
        @include flex-center;
      }

      .blog-category {
        @include badge-primary;
        position: absolute;
        bottom: $space-3;
        left: $space-3;
      }

      .blog-content-inner {
        padding: $space-5;

        h3 {
          font-size: $text-lg;
          font-weight: $font-semibold;
          color: $text-primary;
          margin-bottom: $space-2;
          @include line-clamp(2);
        }

        p {
          font-size: $text-sm;
          color: $text-secondary;
          @include line-clamp(2);
          margin: 0;
        }
      }

      .blog-meta {
        display: flex;
        gap: $space-4;
        margin-bottom: $space-3;

        span {
          font-size: $text-xs;
          color: $text-muted;
        }
      }
    `,
  ],
})
export class BlogComponent {
  posts = [
    {
      slug: 'understanding-technical-analysis',
      title: "Understanding Technical Analysis: A Beginner's Guide",
      excerpt: 'Learn the basics of technical analysis and how to read stock charts effectively.',
      category: 'Education',
      date: 'Feb 5, 2026',
      readTime: 8,
      color: '#00BFA6',
    },
    {
      slug: 'top-sectors-2026',
      title: 'Top Sectors to Watch in 2026 for Long-term Investment',
      excerpt: 'Our analysis of the most promising sectors for sustainable growth.',
      category: 'Market Analysis',
      date: 'Feb 3, 2026',
      readTime: 6,
      color: '#3B82F6',
    },
    {
      slug: 'risk-management-strategies',
      title: 'Risk Management Strategies Every Investor Should Know',
      excerpt: 'Protect your portfolio with these essential risk management techniques.',
      category: 'Strategy',
      date: 'Jan 28, 2026',
      readTime: 10,
      color: '#F59E0B',
    },
    {
      slug: 'reading-financial-statements',
      title: 'How to Read Financial Statements Like a Pro',
      excerpt: 'Master the art of fundamental analysis with this comprehensive guide.',
      category: 'Education',
      date: 'Jan 22, 2026',
      readTime: 12,
      color: '#A855F7',
    },
  ];
}
