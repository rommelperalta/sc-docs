# StreamlineVerify Credentialing API Documentation

This is the official documentation website for the StreamlineVerify Credentialing API, built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## 🏥 About the Credentialing API

The StreamlineVerify Credentialing API provides real-time verification of healthcare professional credentials, licenses, and certifications. It offers comprehensive exclusion screening against federal databases and streamlined integration for healthcare organizations.

### Key Features

- **🛡️ Real-time Credential Verification**: Instant validation of healthcare professional credentials across multiple registries
- **🔍 Comprehensive Exclusion Screening**: Thorough screening against OIG, GSA, and other federal databases
- **⚙️ Streamlined Integration**: Easy-to-integrate REST API with comprehensive documentation
- **🔗 NPI License Matching**: Request NPPES details of individuals or organizations using NPI numbers
- **📊 Employee List Management**: Retrieve and manage employee lists with metadata
- **✅ Match Resolution**: Resolve and manage credential verification matches

## 📚 Documentation Structure

The API documentation includes:

- **Authentication**: Secure API access with Bearer token authentication
- **Check Matches**: Create and upsert employee and entity records for credential verification
- **Retrieve Matches**: Get employee and entity data with credentials and exclusions
- **Get Employee Lists**: Retrieve employee lists and their metadata
- **License from NPI**: Request NPI matches and NPPES details
- **Resolve Matches**: Resolve exclusion matches for employees or entities
- **JSON Schemas**: Complete request/response schemas for all endpoints

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

```bash
npm install
```

or

```bash
yarn install
```

### Local Development

```bash
npm start
```

or

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

or

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve Locally

To test the production build locally:

```bash
npm run serve
```

or

```bash
yarn serve
```

## 🎨 Customization

### Theme

The documentation uses StreamlineVerify's brand colors:
- **Primary Navy**: `#1a365d`
- **Orange Accent**: `#f47d27`
- Responsive design with both light and dark mode support

### Icons

The project uses React Icons for feature illustrations:
- Real-time verification: Shield with checkmark
- Exclusion screening: Magnifying glass
- Integration: Configuration gear

## 📁 Project Structure

```
documentation/sv-credentialing-api-docs/
├── docs/                          # Documentation pages
│   └── credentialing-api/         # API documentation
│       ├── authentication/        # Authentication guides
│       ├── check-matches/         # Create/upsert operations
│       ├── retrieve-matches/      # Data retrieval
│       ├── get-employee-lists/    # Employee lists management
│       ├── license-from-npi/      # NPI license matching
│       └── resolve-matches/       # Match resolution (exclusions)
├── src/                          # React components and styling
│   ├── components/               # Custom React components
│   ├── css/                      # Custom styling
│   └── pages/                    # Custom pages
├── static/                       # Static assets
│   ├── img/                      # Images and logos
│   └── schemas/                  # JSON schemas
└── docusaurus.config.ts          # Docusaurus configuration
```

## 🔧 Configuration

### Key Configuration Files

- `docusaurus.config.ts`: Main configuration file
- `sidebars.ts`: Sidebar navigation structure
- `src/css/custom.css`: StreamlineVerify brand styling
- `static/schemas/`: JSON schemas for API validation

### Environment Variables

The site can be configured with the following environment variables:
- `URL`: Production URL of the site
- `BASE_URL`: Base URL path

## 📦 Dependencies

### Main Dependencies
- `@docusaurus/core`: ^3.7.0
- `@docusaurus/preset-classic`: ^3.7.0
- `react`: ^19.0.0
- `react-icons`: ^5.5.0
- `docusaurus-json-schema-plugin`: ^1.14.0

### Development Tools
- TypeScript support
- ESLint configuration
- Prettier formatting

## ✅ Build Status

The documentation site builds successfully with:
- **Build Status**: ✅ SUCCESS
- **Broken Links**: ✅ All resolved
- **Static Files**: Generated in `build/` directory
- **Ready for Deployment**: Yes

## 🔧 Troubleshooting

### Common Issues

#### Broken Links
If you encounter broken link errors during build:
1. Verify all internal links use the correct relative paths
2. Ensure all referenced files exist
3. Check that directory structures match link paths
4. Use `npm run build` to identify specific broken links
5. For sections without index files, link directly to specific pages

#### Missing Files
- Ensure all referenced `json-request-schema.mdx` files exist in their respective directories
- Verify that any section referenced in navigation has proper documentation files
- When deleting index files, update navigation links to point to specific pages

### Recent Fixes
- ✅ Fixed authentication link paths from `../login/` to `../authentication/`
- ✅ Created missing JSON schema files for endpoint sections
- ✅ Corrected home page navigation links
- ✅ Cleaned up project structure and removed unused sections
- ✅ Fixed resolve-matches navigation to point to resolve-exclusions page

## 🚢 Deployment

### Using SSH:

```bash
USE_SSH=true npm run deploy
```

### Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Production Build

For production deployment:

1. Build the static files: `npm run build`
2. Test the build: `npm run serve`
3. Deploy the `build/` directory to your hosting service

## 🤝 Contributing

1. Make your changes in the appropriate documentation files
2. Test locally with `npm start`
3. Build to verify: `npm run build`
4. Submit your changes for review

### Documentation Guidelines

- Use clear, concise language
- Include code examples for all endpoints
- Maintain consistent formatting
- Update JSON schemas when API changes
- Test all links and references
- Ensure all internal links use correct relative paths
- Verify that referenced files exist before committing

### Adding New Endpoints

When adding new API endpoints:
1. Create the main documentation file (`.md`)
2. Add a corresponding `json-request-schema.mdx` file if needed
3. Update navigation in `sidebars.ts`
4. Add the endpoint to the home page if appropriate
5. Test all links with `npm run build`

### Navigation Best Practices

- If creating a new section, include an `index.md` file for the section overview
- If removing index files, update all navigation links to point to specific pages
- Always test home page navigation after structural changes

## 📞 Support

For technical support or questions about the Credentialing API:
- Email: support@streamlineverify.com
- Documentation: [API Documentation](https://sv-api-docs.local)

## 📄 License

Copyright © 2025 StreamlineVerify, Inc. All rights reserved.
