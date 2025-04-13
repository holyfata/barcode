<script setup lang="ts">
import { HfBarcode } from "@holyfata/barcode-vue";
</script>

<template>
  <div>
    <HfBarcode value="Hello, World!" :options="{ displayValue: false }" />
  </div>
</template>
