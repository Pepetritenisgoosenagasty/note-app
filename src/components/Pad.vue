<template>
  <div class="pad">
    <input
      type="text"
      class="pad__title"
      placeholder="Untitled Note"
      v-model="note.title"
      v-on:keydown="save"
    />
    <textarea
      class="pad__text"
      placeholder="Start Writing..."
      v-model="note.body"
      v-on:keydown="save"
    >
    </textarea>

    <footer class="pad__footer">
      <ul class="pad__footer-items">
        <li class="pad__footer-item">Words: x</li>
        <li class="pad__footer-item pad__footer-item--right">
          Last saved: xx/x
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["note"])
  },
  methods: {
    ...mapActions(["saveNote"]),
    save() {
      this.saveNote();
    }
  }
};
</script>
<style lang="scss" scoped>
.pad {
  flex: 4;
  display: flex;
  flex-direction: column;

  &__title {
    width: 100%;
    border: 0;
    font: inherit;
    font-size: 1.6em;
    outline: none;
    padding: 20px;
    padding-left: 30px;
    padding-top: 25px;
  }

  &__text {
    flex: 1;
    width: 100%;
    margin: 0;
    padding: 20px 30px;
    border: 0;
    font: inherit;
    outline: none;
    resize: none;
    line-height: 2;

    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      #fff 5%,
      #fff 95%,
      transparent 100%
    );
  }

  &__footer {
    padding: 20px 30px;
  }
}

.pad__footer-items {
  display: flex;
  margin: 0;
  padding: 0;
}

.pad__footer-item {
  flex: 1;
  font-size: 0.9em;

  &--right {
    margin-left: auto;
    text-align: center;
  }
}
</style>
