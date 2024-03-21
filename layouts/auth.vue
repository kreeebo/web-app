<template>
	<div class="bg-eerie-black flex sm:flex-col w-full min-h-dvh">
		<div class="flex w-1/2 sm:w-full relative">
			<img class="sm:hidden object-cover" src="/images/auth/sign-in.jpg" />
			<div class="absolute sm:relative w-full flex justify-between items-center p-10 sm:p-6">
				<img class="max-w-[187px] sm:hidden" src="/images/common/icon-dark-brand.svg" />
				<img class="max-w-[87px] sm:mx-auto" src="/images/common/icon-dark-logo.svg" />
			</div>
		</div>
		<div
			class="w-1/2 sm:w-full sm:flex-1 sm:h-full flex justify-center items-center text-white sm:p-6"
		>
			<slot />
		</div>
	</div>
</template>
