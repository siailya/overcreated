<template>
  <transition name="fade">
    <div v-if="show" class="modal-window">
      <div class="modal-window__overlay" @click="onClickOverlay"></div>
      <div class="modal-window__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
const emit = defineEmits(["close"]);

interface Props {
  show: boolean;
}

const {show} = defineProps<Props>();

const onClickOverlay = () => {
  emit("close");
}
</script>

<style lang="scss" scoped>
.modal-window {
  position: fixed;
  top: -50px;
  left: 0;
  width: 100%;
  height: calc(100% + 50px);
  z-index: 1000;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }
}
</style>
