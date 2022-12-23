<section class="bg-black h-[100vh] mt-[10%]">
    <div id="container" class="absolute w-[30%] mt-[10%] ml-[35%]">
        <div id="circle" class="w-[9rem] h-[9rem] rounded-[50%] absolute"></div>
        <div id="circle" class="w-[9rem] h-[9rem] rounded-[50%] absolute"></div>
        <div id="card" class="rounded-[12px] flex flex-col items-center p-[20%]">
            <h4 id="city" class="uppercase leading-10 text-[2rem] text-white">Visakhapatnam</h4>
            <p id="weather" class="uppercase text-[20px] text-white">rainy</p>
            <div id="temperature" class="text-4xl flex items-center justify-center flex-col text-white">
                <p id="lock-icon"><i class="fa-solid fa-cloud-showers-heavy"></i></p>
                <p>26°</p>
            </div>
            <div id="min-max-temp" class="flex text-xs text-white">
                <p class="flex flex-col items-center justify-center text-[20px]">
                    <span>Max</span>
                    <span>25°</span>
                </p>
                <p style="margin: 0 15px;" class="text-[20px]">|</p>
                <p class="flex flex-col items-center justify-center text-[20px]">
                    <span>Max</span>
                    <span>27°</span>
                </p>
            </div>
        </div>
    </div>
    
    
</section>
<style>
    #card{
        backdrop-filter:blur(16px) saturate(200%);
        -webkit-backdrop-filter: blur(6px) saturate(200%);
        background-color: rgb(17, 25, 40,0);
        border: 1px solid rgba(255, 255, 255, 0.125);
    }
    #circle{
        background: linear-gradient(45deg,#fc88ff,#00dbde);
        top: -29px;
        right: -33px;
    }
    #circle:nth-child(2){
        top: 250px;
        left: -33px;
        background: linear-gradient(45deg,#298889,#6005fa,#ffffff);
    }
    #temperature{
        margin: 10px 0;
    }
</style>