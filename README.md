<div align="center">
  <h1>📋 Software Design Specification (SDS)</h1>
  <p><strong>A Modern, Customizable Template for Software Design Specification & Software Requirements Specification</strong></p>
  
  [![Netlify Status](https://api.netlify.com/api/v1/badges/562ef054-6fdc-4ef0-a4cf-b4408b11cad3/deploy-status)](https://app.netlify.com/sites/sds-template/deploys)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
  <p>
    <a href="#features">Features</a> •
    <a href="#templates">Templates</a> •
    <a href="#usage">Usage</a> •
    <a href="#screenshots">Screenshots</a> •
    <a href="#export-options">Export Options</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

---

## 🌟 Overview

SDS Template is a professionally designed, web-based documentation platform that provides customizable templates for creating **Software Design Specifications (SDS)** and **Software Requirements Specifications (SRS)**. Built with modern web technologies, it offers an intuitive interface with powerful export capabilities.

## ✨ Features

### 📝 Dual Template System
- **SDS Template**: Comprehensive software design documentation including class diagrams, sequence diagrams, ER diagrams, and implementation plans
- **SRS Template**: Complete software requirements specification following IEEE Std 830-1998 standards
- **Easy Template Switching**: Toggle between SDS and SRS templates with a single click

### 🎨 User Interface
- **Modern Design**: Clean, professional interface with smooth animations and transitions
- **Dark Mode**: Built-in dark/light theme toggle for comfortable viewing in any environment
- **Responsive Layout**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices
- **Mobile Navigation**: Optimized mobile menu with bottom navigation bar for easy access on smaller screens
- **Smooth Scrolling**: Enhanced navigation with smooth scrolling and active section highlighting

### 📤 Export Capabilities
- **PDF Export**: Print-optimized layout with proper page breaks and formatting
  - Automatic box-shadow removal for clean PDF output
  - Professional typography using Times New Roman and Arial fonts
  - IEEE-standard formatting
- **HTML Download**: Export complete HTML document with all styling
- **DOCX Download**: Generate Microsoft Word documents with proper formatting
  - Clean output without box-shadows or unnecessary styling
  - Compatible with Microsoft Word and Google Docs
- **Google Docs Integration**: Quick export to Google Docs for collaborative editing

### 🎯 Template Features

#### SDS Template Includes:
1. **Introduction** - Project overview and purpose
2. **Document Conventions** - Styling and formatting guidelines
3. **Design Components**
   - Server Side architecture
   - Client Side implementation
   - Third Party Services integration
4. **High Level Component Design** - System architecture diagrams
5. **Class Diagram** - Object-oriented design with class descriptions
6. **Sequence Diagram** - Interactive sequence diagrams with multiple use cases
7. **Database Design**
   - ER Diagram
   - Table descriptions and relationships
8. **Implementation Plan** - Project timeline and developer assignments

#### SRS Template Includes:
1. **Introduction**
   - Purpose
   - Document Conventions
   - Intended Audience
   - Product Scope
   - References
2. **Overall Description**
   - Product Perspective
   - Product Functions
   - User Classes and Characteristics
   - Operating Environment
   - Design and Implementation Constraints
   - User Documentation
   - Assumptions and Dependencies
3. **External Interface Requirements**
   - User Interfaces
   - Hardware Interfaces
   - Software Interfaces
   - Communications Interfaces
4. **System Features**
   - User Authentication
   - Data Management
   - Search and Filtering
   - Reporting and Analytics
5. **Nonfunctional Requirements**
   - Performance Requirements
   - Safety Requirements
   - Security Requirements
   - Software Quality Attributes
   - Business Rules
6. **Other Requirements**
   - Glossary
   - Analysis Models
   - To Be Determined List

### 🖨️ Print Features
- **Cover Page**: Professional cover page with project details (print only)
- **Table of Contents**: Automatically generated TOC with section numbering
- **Revision History**: Track document changes and versions
- **Page Breaks**: Intelligent page breaks for professional printing
- **Print-Optimized CSS**: Separate styling for screen and print media

### 💾 Data Persistence
- **Local Storage**: Automatically saves theme and template preferences
- **Session Persistence**: Maintains user preferences across browser sessions

## 🎯 Templates

### Software Design Specification (SDS)
Perfect for documenting the technical architecture and design decisions of your software project. Includes comprehensive sections for UML diagrams, database design, and implementation planning.

### Software Requirements Specification (SRS)
Follows IEEE 830-1998 standards for software requirements documentation. Ideal for formal project documentation, stakeholder communication, and development planning.

## 🚀 Usage

### Getting Started
1. **Clone the Repository**
   ```bash
   git clone https://github.com/MusfiqDehan/SDS.git
   cd SDS
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required!

3. **Start Editing**
   - Modify the content directly in `index.html`
   - Customize styles in `css/style.css`
   - Add functionality in `script.js`

### Switching Templates
- Click the **SDS** or **SRS** tab in the control bar at the top
- Your preference is automatically saved for future visits

### Toggling Dark Mode
- Click the **sun/moon icon** in the control bar
- Theme preference is saved in local storage

### Mobile Navigation
- **Mobile Menu Button**: Tap the hamburger menu icon (top-left on mobile)
- **Bottom Navigation**: Quick access to all sections via bottom navigation bar
- **Auto-close**: Menu automatically closes when selecting a section

## 📸 Screenshots

### Homepage - Light Mode
The clean, modern interface with easy-to-navigate sections and professional typography.

![Homepage Light Mode](https://github.com/MusfiqDehan/SDS/assets/47440165/fcea0af8-075f-412c-b234-0c92e0682b59)

### Diagrams Section
Includes comprehensive diagram examples for software design documentation.

![Diagrams Section](https://github.com/MusfiqDehan/SDS/assets/47440165/c1f779d6-e189-4841-86cb-43bfe3810612)

### Print/PDF Preview
Professional print layout with proper formatting, optimized for PDF generation.

![Print Preview](https://github.com/MusfiqDehan/SDS/assets/47440165/76c64b10-154d-4b1d-a25e-1e57487f6ff8)

## 📤 Export Options

### PDF Export
1. Click the **PDF download button** (or use Print button)
2. Browser print dialog will open automatically
3. Select "Save as PDF" as the destination
4. Adjust settings if needed and save

**Note**: The print layout automatically:
- Removes all box-shadows for clean output
- Applies proper page breaks
- Shows cover page and table of contents
- Uses professional fonts (Times New Roman, Arial)

### DOCX Export
1. Click the **DOCX download button**
2. File will download automatically
3. Open with Microsoft Word or upload to Google Docs

**Features**:
- Clean formatting without web styling artifacts
- Compatible with Microsoft Word 2007+
- Ready for Google Docs import

### HTML Export
1. Click the **HTML download button**
2. Complete HTML file with embedded styles downloads
3. Can be opened in any browser or HTML editor

### Google Docs Integration
1. Click the **"Edit in Google Docs" button**
2. DOCX file downloads automatically
3. Google Docs opens in a new tab
4. Upload the downloaded file using File > Open > Upload

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
  - CSS Custom Properties (variables)
  - Media queries for responsive design
  - Print media queries for PDF optimization
- **Vanilla JavaScript** - No framework dependencies
  - Local Storage API
  - DOM manipulation
  - Event handling
- **html-docx.js** - DOCX generation library

## 📋 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS 13+, Android 10+)

## 🎨 Customization

### Modifying Content
Edit the content directly in `index.html`:
- Update project-specific information
- Add or remove sections
- Customize table data
- Replace placeholder diagrams

### Styling
Customize colors and styling in `css/style.css`:
```css
:root {
    --bg-light: #f8fafc;
    --bg-dark: #0f172a;
    --text-light: #1e293b;
    --text-dark: #f1f5f9;
    --accent: #3b82f6;
    --accent-hover: #2563eb;
}
```

### Adding Diagrams
- Place diagram images in the `images/` directory
- Reference them in the HTML using relative paths
- Supported formats: PNG, JPG, SVG

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Musfiq Dehan**
- GitHub: [@MusfiqDehan](https://github.com/MusfiqDehan)

## 🙏 Acknowledgments

- IEEE for SRS/SDS documentation standards
- Contributors and users who provide valuable feedback
- Open source community for inspiration and tools

## 📞 Support

If you encounter any issues or have questions:
- 🐛 [Open an issue](https://github.com/MusfiqDehan/SDS/issues)
- 💬 [Start a discussion](https://github.com/MusfiqDehan/SDS/discussions)
- ⭐ Star the repository if you find it useful!

---

<div align="center">
  <p>Made with ❤️ for the software development community</p>
  <p>
    <a href="https://sds-template.netlify.app">Live Demo</a> •
    <a href="https://github.com/MusfiqDehan/SDS">GitHub Repository</a>
  </p>
</div>
