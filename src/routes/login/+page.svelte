<script lang="ts">
    function handleSubmit(event:any){
        console.log(event,'=============');

    }

</script>
<div class="flex flex-col justify-center items-center h-[100vh] w-[90vw]">
    <div class=" bg-blue-300 p-7">
        <h1>This is my login page</h1>
        <form onsubmit={handleSubmit} class="p-2 flex flex-col gap-2 w-2xl">
            <input type="text" class="border-2 p-2" placeholder="Enter your email"/>
            <input type="password"  class="border-2 p-2" placeholder="Enter your password"/>
            <button type="submit">Submit</button>
        </form>
    </div>
</div>