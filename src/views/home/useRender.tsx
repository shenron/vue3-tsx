import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import MyComponent from '@/views/my_component/MyComponent.vue';
import logo from '@/assets/logo.png';

export default function () {
  return (
    <div class="home">
      <img alt="Vue logo" src={logo} />
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      <MyComponent onCustomClick={() => console.log('oh yes')} />
    </div>
  );
}
