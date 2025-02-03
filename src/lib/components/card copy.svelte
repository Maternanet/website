<div class="frame-1 screen">
    <div class="overlap-group">
        <div class="overlap-group1">
            <div class="rectangle-2"></div>
            <div class="rectangle-3"></div>
            <div class="rectangle-4"></div>
            <div class="this-card-belongs-to">this card belongs to</div>
            <div class="visit-you-patient-hub">visit you patient hub</div>
            <div class="medilynecom">medilyne.com</div>
            <div class="scan-here inter-bold-black-11px">SCAN HERE</div>
            <div class="abc-dfg inter-bold-black-11px">ABC DFG</div>
            <img class="image-2" src="image-2.png" alt="image 2" />
            <div class="name">James Doe</div>
        </div>
        <div class="cvv">cvv</div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css?family=Inter:400,700");

    .frame-1{
        align-items: flex-start;
        background-color: var(--white);
        display: flex;
        width: 301px;
    }
    .hidden,.hidden{
        pointer-events: none;
        visibility: hidden;
    }
    .inter-bold-black-11px{
        color:var(--black);
        font-family: var(--font-familyinter);
        font-size: var(--font-size-1);
        font-weight: 700;
        font-style: normal;
    }
    :root{
        --black:rgba(0,0,0,1);
        --tropical-rain-forest: rgba(32,130,100,1);
        --white: rgba(255,255,255,1);
        --font-size-m: 10px;
        --font-size-1:11px;
        --font-size-x1: 12px;
        --font-family-inter:"Inter";
    }
    .cvv{
        color:var(--white);
        font-family: var(--font-family-inter);
        font-size: var(--font-size-x1);
        font-weight: 400;
        left:10px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        top: 86px;
        transform: rotate(90deg);
    }
    .abc-dfg{
        left: 0;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        top :136px;
        transform: rotate(90deg);
        white-space: nowrap;
    }
    .rectangle-2{
        background-color: var(--white);
        border-radius: 18px;
        height: 151px;
        left: 148px;
        position: absolute;
        top: 19px;
        width: 145px;
    }
    .image-2{
        height: 112px;
        left: 168px;
        object-fit: cover;
        position: absolute;
        top: 40px;
        width: 116px;
    }
    .scan-here{
        left: 129px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        top: 90px;
        transform: rotate(90deg);
        white-space: nowrap;
    }
    .visit-you-patient-hub{
        color: var(--white);
        font-family: var(--font-family-inter);
        font-size: var(--font-size-m);
        font-weight: 400;
        left: 86px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        top:88px;
        transform: rotate(90deg);
        white-space: nowrap;
    }
    .rectangle-3{
        background-color: #a8dac7;
        height: 188px;
        left: 44px;
        position: absolute;
        top: 0;
        width:56px;
    }
    .this-card-belongs-to{
        color: var(--tropical-rain-forest);
        font-family: var(--font-family-inter);
        font-size: var(--font-size-m);
        font-weight: 400;
        left: 40px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        top: 88px;
        transform: rotate(90deg);
        white-space: nowrap;
    }
    .rectangle-4{
        background-color: var(--white);
        border-radius: 3px;
        height: 68px;
        left: 14px;
        position: absolute;
        top:110px;
        width: 23px;
    }
    .medilynecom{
        color: var(--white);
        font-family: var(--font-family-inter);
        font-size: var(--font-size-x1);
        font-weight: 700;
        left:76px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        top: 88px;
        transform: rotate(90deg);
    }
    .overlap-group{
        background-color: var(--tropical-rain-forest);
        height: 188px;
        position: relative;
        width: 301px;
    }
    .overlap-group1{
        height: 188px;
        left: -4px;
        position: absolute;
        top: 0;
        width: 292px;
    }
    .name{
        color: var(--black);
        font-family: var(--font-family-inter);
        font-size: var(--font-size-x1);
        left: 31px;
        letter-spacing: 0;
        list-style: normal;
        position: absolute;
        top: 85px;
        transform: rotate(90deg);
    }



</style>