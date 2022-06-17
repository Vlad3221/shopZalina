import { Options, Vue } from "vue-class-component";
import SectionTitleHeader from "@/Components/SectionTitleHeader/index.vue";


@Options({
  components: {
    SectionTitleHeader
  },
})
export default class HomeView extends Vue {}
