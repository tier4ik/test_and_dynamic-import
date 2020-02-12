<template>
	<div :class="$style.main">
		<base-button />
	</div>
</template>

<script>

import BaseButton from '../components/BaseButton.vue'

export default {
	components: {
		'base-button': BaseButton
	}
}
</script>

<style lang='scss' module>

.main {
	background-color: yellow; 
}

</style>