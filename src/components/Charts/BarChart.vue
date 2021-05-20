<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartTitle: {
      type: String,
      default: ""
    },
    displayLegend: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default() {
        return {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 50,
              right: 50,
              top: 30,
              bottom: 20
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          legend: {
            display: false
          },
          title: {
            display: true,
            text: ""
          }
        };
      }
    }
  },
  mounted() {
    if (this.displayLegend) {
      this.options.legend.display = true;
    }
    this.options.title.text = this.chartTitle;
    this.options.onClick = this.handle;
    this.renderChart(this.chartData, this.options);
  },
  methods: {
    handle(point, event) {
      if (event && event.length > 0) {
        const item = event[0];
        this.$emit("click", item._index);
      }
    }
  }
};
</script>
