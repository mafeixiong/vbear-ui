<template>
    <div style="display: flex; justify-content: center;">
        <div style="width: 600px; border: 1px solid black;">
            <p>段落1</p>
            <p>段落2</p>
            <p>段落3</p>
            <p>段落4</p>
            <p>段落5</p>
            <p>段落6</p>
            <p>段落7</p>
            <p>段落8</p>
            <p>段落9</p>
            <v-sticky :distance="100">
                <div style="border: 1px solid red; ">
                    <img src="https://i.loli.net/2020/04/27/UcBeGxRwXZESiI2.png" />
                </div>
            </v-sticky>
            <p>段落1</p>
            <p>段落2</p>
            <p>段落3</p>
            <p>段落4</p>
            <p>段落5</p>
            <p>段落6</p>
            <p>段落7</p>
            <p>段落8</p>
            <p>段落9</p>
            <p>段落10</p>
            <p>段落11</p>
            <p>段落12</p>
            <p>段落13</p>
            <p>段落14</p>
            <p>段落15</p>
            <p>段落16</p>
            <p>段落17</p>
            <p>段落18</p>
            <p>段落19</p>
            <p>段落20</p>
        </div>
    </div>

</template>

<script>
  import vSticky from './sticky/sticky'

  export default {
    name: 'demo',
    components: {
      vSticky
    }
  }
</script>
<style>
    img {max-width: 100%;}
</style>
