<template>
  <div class="project-details-container" :style="{ backgroundColor: backgroundColor, color: textColor }">
    <div class="detail-item members">
      <div class="detail-label">Team</div>
      <div>
        <span v-if="Array.isArray(members)">
          <span v-for="(member, idx) in members" :key="idx" class="member-name" :class="{ 'bold-member': member === 'Varun Narayanswamy' }">
            <template v-if="member === 'Varun Narayanswamy'">
              <b>{{ member }}</b>
            </template>
            <template v-else>
              {{ member }}
            </template>
            <span v-if="idx < members.length - 1">, </span>
          </span>
        </span>
        <span v-else>
          <span class="member-number">{{ members }}</span>
          <span class="member-label"> member<span v-if="members > 1">s</span></span>
        </span>
      </div>
    </div>
    <div class="detail-item role">
      <div class="detail-label">Role</div>
      <div class="role-title">{{ role }}</div>
    </div>
    <div class="detail-item timeline">
      <div class="detail-label">Timeline</div>
      <div class="timeline-value">
        <span class="timeline-number">{{ timelineNumber }}</span>
        <span class="timeline-unit"> {{ timelineUnit }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetails',
  props: {
    members: {
      type: [Array, Number],
      required: true
    },
    role: {
      type: String,
      required: true
    },
    timelineNumber: {
      type: Number,
      required: true
    },
    timelineUnit: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    textColor() {
      return this.getContrastYIQ(this.backgroundColor);
    }
  },
  methods: {
    // Accepts hex or rgb(a) string
    getContrastYIQ(bgColor) {
      let r, g, b;
      if (bgColor.startsWith('#')) {
        let hex = bgColor.replace('#', '');
        if (hex.length === 3) {
          hex = hex.split('').map(x => x + x).join('');
        }
        r = parseInt(hex.substr(0, 2), 16);
        g = parseInt(hex.substr(2, 2), 16);
        b = parseInt(hex.substr(4, 2), 16);
      } else if (bgColor.startsWith('rgb')) {
        const rgb = bgColor.match(/\d+/g);
        r = parseInt(rgb[0]);
        g = parseInt(rgb[1]);
        b = parseInt(rgb[2]);
      } else {
        // fallback to white
        return '#ffffff';
      }
      // YIQ formula
      const yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? '#000000' : '#ffffff';
    }
  }
}
</script>

<style scoped>
.project-details-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0px;
  padding: 24px 50px;
  border-radius: 18px;
  font-size: 1.2rem;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
}
.detail-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: fit-content;
  max-width: 25%;
  min-width: 120px;
  text-align: left;
}
.detail-label {
  font-weight: bold;
  margin-bottom: 2px;
  font-size: 1.1em;
  text-align: left;
}
.member-name {
  font-weight: 100;
  opacity: 0.8;
  text-align: left;
}
.bold-member {
  font-weight: bold;
  font-style: normal;
  opacity: 1;
}
.member-number {
  font-size: 2.5em;
  font-weight: bold;
  line-height: 1;
  display: inline-block;
  margin-right: 8px;
}
.member-label {
  font-size: 1em;
  font-weight: normal;
}
.role-title {
  font-weight: 100;
  text-align: left;
  opacity: 0.8;
}
.timeline-value {
  font-weight: 100;
  text-align: left;
}
.timeline-number {
  font-size: 2.5em;
  font-weight: bold;
  line-height: 1;
  display: inline-block;
  margin-right: 6px;
}
.timeline-unit {
  font-size: 1em;
  font-weight: normal;
  opacity: 0.8;
}
@media (max-width: 700px) {
  .project-details-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 10px;
    font-size: 1rem;
  }
  .detail-item {
    min-width: 0;
    width: 100%;
    max-width: 100%;
    flex: unset;
    text-align: left;
  }
  .member-number {
    font-size: 2em;
  }
  .timeline-number {
    font-size: 1.5em;
  }
}
</style>
