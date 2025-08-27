<template>
  <div class="star-rating">
    <span
      v-for="star in totalStars"
      :key="star"
      class="star"
      :class="getStarClass(star)"
    >
      ★
    </span>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 5,
    },
    totalStars: {
      type: Number,
      default: 5,
    },
  },
  methods: {
    getStarClass(starIndex) {
      const rating = this.rating;

      if (starIndex <= rating) {
        return "filled";
      } else if (starIndex - 0.5 <= rating) {
        return "half-filled";
      } else {
        return "empty";
      }
    },
  },
};
</script>

<style scoped>
.star-rating {
  display: inline-flex;
  gap: 2px;
}

.star {
  font-size: 20px;
  color: #ddd;
  transition: color 0.2s;
}

.star.filled {
  color: #ffd700;
}

.star.half-filled {
  background: linear-gradient(90deg, #ffd700 50%, #ddd 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.star.empty {
  color: #ddd;
}
</style>
