# Project Title

## Overview

This project is designed to provide a comprehensive dashboard solution for monitoring and analyzing data related to the Ministry of Environment & Forestry. It demonstrates a structured approach to solving data visualization challenges using React and Vite.

---

## Design Approach

### Architecture

- **Component-Based Architecture**: Modular React components following separation of concerns
- **CSS Modules**: Scoped styling with vanilla CSS for better performance and maintainability
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions

### Styling Strategy

- **CSS Variables**: Centralized design tokens in `src/styles/variables.css`
- **Modular CSS**: Each component has its own CSS module following BEM-inspired naming
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Design System**: Consistent spacing, colors, and typography using CSS custom properties

## Key design principles:

1. Separation of concerns: Each module has a single responsibility.
2. DRY (Don't Repeat Yourself): Reusable code is emphasized.
3. Test-driven development (TDD): Unit tests are written to ensure reliability.

---

## Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS Modules
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: React Context API
- **Routing**: React Router DOM

---

## Assumptions

The following assumptions were made during the development of this project:

1. **Data Source**: Currently uses mock data (`mockData.ts`) - assumes future integration with a backend API
2. **Image Assets**: Uses placeholder images - assumes real project
3. **Browser Support**: Targets modern browsers with CSS Grid and Flexbox support
4. **Screen Sizes**: Optimized for desktop (1024px+) and tablet (768px+) with mobile responsiveness

---

## Instructions to Run the Project Locally

### Prerequisites

Ensure you have the following installed on your system:

- React 19
- Vite
- Node 22

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/mwendwa99/verst_dashboard
   cd verst_dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

---

## License

This project is licensed under the terms specified in the [LICENSE.md](LICENSE.md) file.
