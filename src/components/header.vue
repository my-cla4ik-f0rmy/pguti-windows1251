<template>
    <div class="header">
        <img class="icon" src="/icon.svg">
        <div class="text">
            pguti-windows-1251
        </div>
    </div>
</template>

<style>
.header {
    position: sticky;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    background-color: var(--md-sys-color-surface);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);


}

.icon {
    width: 35px;
}

.text {
    color: var(--md-sys-color-on-surface);
    text-align: left;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 600;
    position: relative;
}
</style>

