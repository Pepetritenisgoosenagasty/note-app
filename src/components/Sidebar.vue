<template>
  <div class="sidebar">
    <div v-if="notes.length">
      <note v-for="(note, i) in notes" :note="note" :key="i" />
    </div>

    <div class="sidebar__content" v-else>
      Boo no note. Get writing!
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import note from "./Note";
export default {
  name: "sidebar",
  computed: {
    ...mapGetters(["notes"])
  },
  components: {
    note
  }
};
</script>
<style lang="scss" scoped>
.sidebar {
  background: #f9f9f9;
  flex: 1;
  height: 100%;
  min-width: 28%;
  border-right: 2px solid #eee;
  overflow-y: scroll;

  &__content {
    padding: 30px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
