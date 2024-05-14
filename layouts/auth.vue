<template>
	<div class="bg-eerie-black flex w-full min-h-dvh">
		<div class="flex w-1/2 relative">
			<NuxtImg class="object-cover" src="/images/auth/sign-in.jpg" />
			<div class="absolute w-full flex justify-between items-center p-10">
				<NuxtImg width="187" class="max-w-[187px]" src="/images/common/icon-dark-brand.svg" />
				<NuxtImg width="87" class="max-w-[87px]" src="/images/common/icon-dark-logo.svg" />
			</div>
		</div>
		<div class="relative w-1/2 flex justify-center items-center text-white">
			<slot />
		</div>
	</div>
</template>
