const Home = function () {

    return (
    <div class="flex flex-col justify-center items-center font-display">
      <div>
        <h1 class="text-4xl font-bold pt-4 my-4">
          Boost your productivity.<br/>
          Start using our app today.
        </h1>
      </div>
      <div>
        <p class="text-xl m-4">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
        </p>
      </div>
      <div>
        <div class="flex gap-4 items-center">
        <button class="bg-indigo-600 p-2 rounded-md text-white font-semibold">Get Started</button>
        <a href="#" class="font-semibold">Learn More →</a>
      </div>
      </div>
    </div>
  
    );
  };
  
  export default Home; // Exporting the component for use in other files.