# Arshine 3D Font Setup

## How to Download Arshine 3D Font

Based on the [FontSpace page](https://www.fontspace.com/arshine-3d-font-f121159), here's how to get the font:

### Free Demo Version (Personal Use Only):
1. **Visit FontSpace**: https://www.fontspace.com/arshine-3d-font-f121159
2. **Click "Free Download"** button on the page
3. **Complete any required steps** (may require free account registration)
4. **Extract the downloaded files** and place them in this directory

### ✅ Font Files Added:
- `ArshineExtruderight-4nZ99.otf` ✅ (installed and configured)

### Commercial Version:
1. **Full Version**: https://craftsupply.co/product/arshine-3d-font/
2. **Check Bundle Sale**: https://craftsupply.co/bundle/ (97% OFF mentioned on FontSpace)

## Converting Font Files

If you have the original font files in other formats, you can convert them using:

1. **Online Converters**:
   - https://convertio.co/font-converter/
   - https://cloudconvert.com/font-converter

2. **Command Line Tools**:
   ```bash
   # Install fonttools if not already installed
   pip install fonttools[woff]
   
   # Convert TTF to WOFF2
   fonttools ttLib.woff2 compress Arshine3D-Regular.ttf
   
   # Convert TTF to WOFF
   fonttools ttLib.woff2 compress --flavor woff Arshine3D-Regular.ttf
   ```

## Current Fallbacks

Until you add the Arshine 3D font files, the logo will use these fallback fonts:
- Impact (Windows/Mac)
- Arial Black (cross-platform)
- Generic sans-serif

## Font Features Applied

The font implementation includes:
- ✅ Font-face declarations for multiple formats
- ✅ Font-display: swap for better performance
- ✅ Letter spacing optimization for 3D effect
- ✅ Text shadow for depth
- ✅ Gradient text coloring
- ✅ Theme-aware styling

## License Note

⚠️ **Important**: Ensure you have the proper license for commercial use of Arshine 3D font before deploying to production.
