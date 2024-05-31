<script setup>
import { Primitive, useForwardProps } from "radix-vue";
import { DashIcon } from "@radix-icons/vue";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
const forwardedProps = useForwardProps(props);
</script>

<template>
  <Primitive v-bind="forwardedProps">
    <slot>
      <DashIcon />
    </slot>
  </Primitive>
</template>
