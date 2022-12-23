<section class="bg-[#212428] h-[120vh]">
    <nav class="">
        <div class="flex justify-around">
            <div class="mt-[3%] mr-[20%]">
                <h1 class="text-4xl text-[#E0E0E1] font-serif"><span class="text-[#D10746] text-5xl">C</span>haitanya</h1>
            </div>
            <div id="nav-menu" class="mt-[4%] text-[#E0E0E1] text-lg">
                <ul class="flex gap-5 cursor-pointer">
                    <a href="#home"><li>Home</li></a>
                    <a href="#features"><li>Features</li></a>
                    <a href="#projects"><li>Projects</li></a>
                    <a href=""><li>Resume</li></a>
                    <a href=""><li>Contact</li></a>
                    <button id="buynow" class="bg-[#1F2125] h-[5vh] w-[7vw] text-[#D10746]">
                        Buy Now
                    </button>
                </ul>
            </div>
        </div>
    
    </nav>
    <section id="home">
        <div class="">
            <div id="name" class="absolute ml-[10%] mt-[8%]">
                <p class="uppercase font-GTAmericaExtendedRegular text-[#ABB6C2] ">welcome to my world</p>
                <h1 class="text-6xl text-[#E0E0E1]">Hi, I’m <span class="text-[#D10746]">Chaitanya</span></h1>
                <p class="text-6xl font-bold text-[#E0E0E1]">a Frontend Developer.</p>
                <p class="w-[50%] text-[#ABB6C2] mt-[3%] text-lg">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                <div id="find" class="flex gap-56 mt-[3%] text-[#ABB6C2] font-GTAmericaExtendedRegular">
                    <div>
                        <p class="uppercase">find with me</p>
                        <div class="mt-[15%]">
                            <a href="#"><button class="mr-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></button></a>
                            <a href="#"><button class="mr-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></button></a>
                            <a href="#"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></button></a>
                        </div>
                    </div>
                    <div>
                        <p class="uppercase">best skill on</p>
                        <div class="mt-[13%]">
                            <a href="#"><button class="mr-5"><img id="img" src="./html.png" alt=""></button></a>
                            <a href="#"><button class="mr-5"><img src="./css.png" alt=""></button></a>
                            <a href="#"><button class="mr-5"><img src="./svelte.png" alt=""></button></a>
                            <a href="#"><button class="p-"><img id="img1" src="./tail.png" alt=""></button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="img-bg" class="w-[20%] h-[65%] ml-[70%] mt-[10%] absolute">
                <img class="mt-[2%] ml-[-0.5] rounded-[10px]" src="./5.jpg" alt="">
            </div>
        </div>
        
        
    </section>
</section>
<div class="line mt-[-5%]">

</div>





<style>
    #nav-menu ul li:hover{
        border-bottom: 2px solid white;
        transition: .0.2s ease-in-out;
    }
    #buynow{
        border-radius: 20px;
    background: #1F2125;
    box-shadow:  5px 5px 10px #191a1e,
             -5px -5px 10px #25282c;
    }
    #name h1{
        display: block;
        margin-block-start: 0.83em;
        margin-inline-start: 0%;
        margin-inline-end: 0%;
        font-weight: bold;
    }
    #name span{
        font-family: 'Lucida Sans';
    }
    #img-bg{
        position: absolute;
        border-radius: 9px;
        background: #1E2024;
        box-shadow:  5px 5px 10px #0c0d0e,
             -5px -5px 10px #30333a;
    }
    #find button{
        padding: 20px;
        border-radius: 10px;
        background: #1F2125;
        box-shadow:  5px 5px 10px #191a1e,
             -5px -5px 10px #25282c;
    }
    #find button #img{
        width: 30px;
    }
    #find button img{
        width: 25px;
    }
    .line{
        border: 1px solid #0c0d0e;
        width: 81%;
        margin-left: 10%;
    }
</style>