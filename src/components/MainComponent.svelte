<script>
  import NavButtonSection from "./NavButtonSection/NavButtonSection.svelte";
    import GitHubIcon from '@/assets/GitHubIcon.svelte';
    import operatorImg from "@/assets/images/operator.png";
  import LeftStatusSection from "./LeftStatusSection/LeftStatusSection.svelte";
  import RightStatusSection from "./RightStatusSection/RightStatusSection.svelte";
</script>

<main class="statPageBackgroundWrapper">
    <NavButtonSection />
    <div class="groupIconWrapper">
        <GitHubIcon />
    </div>
    <img src={operatorImg} alt="operator" class="characterImage" />
    <LeftStatusSection />
    <RightStatusSection />
</main>