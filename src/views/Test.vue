<template>
    <div>
        <article @click="goto('art1')">Go to article 1</article>

        <article>1</article>

        <article>2</article>

        <article>3</article>

        <article>4</article>

        <article>5</article>

        <article>6</article>

        <article>7</article>

        <article>8</article>

        <article>9</article>

        <article>10</article>

        <article>11</article>

        <article ref="art1">
            Article 12
        </article>
    </div>
</template>

<script>
    export default {
        methods: {
            goto(refName) {
                var element = this.$refs[refName];
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        },
    }

    
</script>

<style lang="scss" scoped>
    article {
        width: 80%;
        height: 100px;
        background-color: yellow;
    }
</style>