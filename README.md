# @vuenice/button

Vue 3 Button component with various styles and states.

## Installation

```bash
npm install @vuenice/button
```

## Usage

### Composition API (Recommended)

```vue
<script setup>
import VueNiceButton from '@vuenice/button';
</script>

<template>
  <VueNiceButton btn-title="Click Me" btn-type="primary" />
</template>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `btnTitle` | String | `''` | Button text content |
| `btnType` | String | `'secondary'` | Button style variant: `primary`, `secondary`, `danger`, `gray-outline-btn`, `danger-outline-btn`, `info-outline-btn`, `gray-text-btn`, `secondary-text-btn`, `primary-text-btn`, `danger-text-btn`, `waas` |
| `size` | String | `'btn-sm'` | Button size: `icon`, `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`, `btn-xxl` |
| `type` | String | `'button'` | HTML button type: `button`, `submit`, `reset` |
| `disabled` | Boolean | `false` | Disable the button |
| `iconName` | String | `''` | Icon component name to display |
| `iconType` | String | `'outline'` | Icon type: `outline` or `solid` |
| `iconPosition` | String | `'first'` | Icon position: `first` or `last` |
| `imagePath` | String | `''` | Image path to display instead of icon |
| `iconColor` | String | `''` | Custom icon color class |
| `textColor` | String | `''` | Custom text color class |
| `bgColor` | String | `''` | Custom background color class |
| `iconSize` | String | `''` | Custom icon size class |
| `extraClass` | String | `''` | Additional CSS classes |
| `titleClass` | String | `''` | Custom title/text class |
| `isLoading` | Boolean | `false` | Show loading spinner |
| `loaderColor` | String | `'#ffffff'` | Loading spinner color |

### Slots

- Default slot: Button content (takes precedence over btnTitle)

### Events/Emits

The component emits all native button events. You can listen to them using the `@` prefix:

```vue
<VueNiceButton btn-title="Click Me" @click="handleClick" @focus="handleFocus" @blur="handleBlur" />
```

Common emits:
- `@click` - Emitted when button is clicked
- `@focus` - Emitted when button gains focus
- `@blur` - Emitted when button loses focus

## Examples

### Basic Usage

```vue
<VueNiceButton btn-title="Submit" btn-type="primary" />
```

### With Icon

```vue
<VueNiceButton 
  btn-title="Add Item" 
  btn-type="primary" 
  icon-name="PlusIcon" 
/>
```

### Loading State

```vue
<VueNiceButton 
  btn-title="Saving..." 
  btn-type="primary" 
  :is-loading="true" 
/>
```

### Sizes

```vue
<VueNiceButton btn-title="Small" size="btn-sm" />
<VueNiceButton btn-title="Medium" size="btn-md" />
<VueNiceButton btn-title="Large" size="btn-lg" />
```

### Button Types

```vue
<!-- Filled buttons -->
<VueNiceButton btn-title="Primary" btn-type="primary" />
<VueNiceButton btn-title="Secondary" btn-type="secondary" />
<VueNiceButton btn-title="Danger" btn-type="danger" />

<!-- Outline buttons -->
<VueNiceButton btn-title="Gray Outline" btn-type="gray-outline-btn" />
<VueNiceButton btn-title="Danger Outline" btn-type="danger-outline-btn" />
<VueNiceButton btn-title="Info Outline" btn-type="info-outline-btn" />

<!-- Text buttons -->
<VueNiceButton btn-title="Gray Text" btn-type="gray-text-btn" />
<VueNiceButton btn-title="Secondary Text" btn-type="secondary-text-btn" />
<VueNiceButton btn-title="Primary Text" btn-type="primary-text-btn" />
<VueNiceButton btn-title="Danger Text" btn-type="danger-text-btn" />
```

## License

MIT