<template>
  <div class="note">
    <a href="" class="note__delete">
      <span class="note__delete-icon">&times;</span>
    </a>
    <div class="note__content">
      <a href="#" class="note__title">
        <span v-if="note.title">{{ note.title }}</span> 
        <span v-else>Untitled</span> 
        </a>
      <p class="note__body">
        <span v-if="note.body">{{ note.body }}</span>
        <span v-else><em>Empty</em></span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Note",
  props: ["note"]
};
</script>
<style lang="scss" scoped>
.note {
  display: flex;
  border-bottom: 2px solid #eee;
  color: inherit;
  flex-direction: row;
  max-width: 100%;
  opacity: 0.5;

  &:hover {
    opacity: 1;

    .note__delete {
      margin-left: 0;
    }
  }

  &__content {
    padding: 30px;
    flex: 2;
    overflow: hidden;
  }

  &__title {
    display: block;
    font-size: 1em;
    font-weight: 500;
    color: inherit;
    white-space: nowrap;
    overflow: hidden;
    margin: 0;
    text-overflow: ellipsis;
  }

  a:hover {
    text-decoration: underline;
  }

  &__body {
    font-size: 0.9em;
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__delete {
    position: relative;
    margin-left: -50px;
    width: 50px;
    display: block;
    background: #cc4466;
    min-height: 100%;
    color: #eee;
    transition: margin-left 1000ms ease-in-out;
  }

  &__delete-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    font-weight: 600;
  }
}
</style>
