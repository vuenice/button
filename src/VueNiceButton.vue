
<template>
  <button
    :disabled="disabled"
    :type="type"
    class="inline-flex items-center justify-center gap-2 rounded-md border focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    :class="[buttonSize, buttonType, textColor, bgColor, extraClass]"
  >
    <img
      v-if="imagePath"
      :src="cdn(imagePath)"
      :class="[buttonImageSize, buttonImagePosition]"
      alt=""
    >
    <component
      :is="iconName"
      v-if="iconName"
      :class="[buttonImageSize, buttonImagePosition, iconColor, iconSize]"
      class="size-4"
    />
    <CommonLoader
      v-if="isLoading"
      size="20"
      :color="props.loaderColor"
    />
    <template v-if="$slots.default">
      <slot />
    </template>
    <span
      v-else-if="btnTitle"
      class="text-nowrap"
      :class="titleClass"
    >{{ btnTitle }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import CommonLoader from './CommonLoader.vue';


const props = defineProps({
  btnTitle: { type: String, default: '' },
  btnType: { type: String, default: 'secondary' },
  iconName: { type: String, default: '' },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  size: { type: String, default: 'btn-sm' },
  imagePath: { type: String, default: '' },
  iconType: { type: String, default: 'outline' },
  iconPosition: { type: String, default: 'first' },
  iconColor: { type: String, default: '' },
  textColor: { type: String, default: '' },
  bgColor: { type: String, default: '' },
  iconSize: { type: String, default: '' },
  extraClass: { type: String, default: '' },
  titleClass: { type: String, default: '' },
  isLoading: { type: Boolean, default: false },
  loaderColor: { type: String, default: '#ffffff' },
});

const defaultButton = 'text-white border-transparent';
const outlineButton = 'bg-white shadow-sm';
const textButton = 'bg-transparent border-none focus:ring-transparent !p-0 !h-fit';

const buttonType = computed(() => {
  switch (props.btnType) {
    case 'primary':
      return `bg-primary-900 transition-colors duration-200 ease-linear hover:bg-primary-1300 active:bg-grayCust-430 ${defaultButton}`;
    case 'secondary':
      return `bg-secondary-800 transition-colors duration-200 ease-linear hover:bg-primary-310 active:bg-primary-900 ${defaultButton}`;
    case 'danger':
      return `bg-redCust-730 transition-colors duration-200 ease-linear hover:bg-pinkCust-150 active:bg-redCust-720 ${defaultButton}`;
    case 'gray-outline-btn':
      return `text-grayCust-980 border-grayCust-160 hover:bg-grayCust-50 hover:text-grayCust-1740 transition-colors duration-200 ease-linear active:bg-grayCust-100 ${outlineButton}`;
   case 'danger-outline-btn':
      return `text-redCust-730 border-redCust-220 hover:bg-redCust-110 hover:text-pinkCust-150 transition-colors duration-200 ease-linear active:bg-redCust-195 ${outlineButton}`;
    case 'info-outline-btn':
      return `text-blueCust-780 border-blueCust-610 focus:ring-blueCust-280 hover:bg-blueCust-65 hover:text-blueCust-900 ${outlineButton}`;
    case 'gray-text-btn':
      return `text-grayCust-980 hover:text-grayCust-1740 ${textButton}`;
    case 'secondary-text-btn':
      return `text-secondary-800 hover:opacity-90 ${textButton}`;
    case 'primary-text-btn':
      return `text-primary-900 hover:opacity-90 ${textButton}`;
    case 'danger-text-btn':
      return `text-redCust-730 hover:text-pinkCust-150 ${textButton}`;
    case 'waas':
      return `bg-waas-500 transition-colors duration-200 ease-linear ${defaultButton}`;
    default:
      return '';
  }
});

const buttonSize = computed(() => {
  switch (props.size) {
    case 'icon':
      return 'px-3.5 py-2 text-xs font-medium';
    case 'btn-xs':
      return 'h-[34px] px-3.5 py-2 text-xs font-medium';
    case 'btn-sm':
      return 'h-[34px] px-3.5 py-2 text-sm font-medium';
    case 'btn-md':
      return 'h-[38px] px-4 py-2.5 text-sm font-medium';
    case 'btn-lg':
      return 'h-[42px] px-[18px] py-2.5 text-base font-semibold';
    case 'btn-xl':
      return 'px-5 py-2.5 text-base font-semibold !gap-4';
    case 'btn-xxl':
      return 'px-7 py-4 text-lg font-semibold !gap-4';
    default:
      return '';
  }
});

const buttonImageSize = computed(() => {
  switch (props.size) {
    case 'btn-xs':
      return 'w-[14px] h-[14px]';
    case 'btn-sm':
      return 'min-w-[18px] h-[18px]';
    case 'btn-md':
    case 'btn-lg':
    case 'btn-xl':
      return 'w-5 h-5';
    case 'btn-xxl':
      return 'w-6 h-6';
    default:
      return '';
  }
});

const buttonImagePosition = computed(() => {
  return props.iconPosition === 'last' ? 'order-last' : 'order-first';
});
</script>
