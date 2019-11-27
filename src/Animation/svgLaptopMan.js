import React from 'react';
import {TweenLite, Back, TweenMax ,Bounce, TimelineLite} from "gsap";
 
export default class SvgLaptopMan extends React.Component{

    constructor(props){
        super(props);
        this.myTween = new TimelineLite({paused: false});
        this.clockHandTween= null;
      }

      state={
          played:false
      }

    handleSvgClick=()=>{
        
        if(this.state.played){
            this.myTween.play()
        }else{
            this.myTween.reverse()
        }
        this.setState({
            played:!this.state.played
        })
        this.clockHandTween.restart()
        
        
    }
    componentDidMount(){
        this.myTween
        .to(".laptop-man, .panel.blue", 0.7, { "background":"rgb(231,	138,	61	)"},0.1)
        .to(".cloud", 0.7, {"fill":"rgb(227,125,58)"},0.1)
        .to("#window-four path", 0.5, {"fill":"rgb(58,139,209)"},0.1)
        .to("#Vector_82", 0.7, {"fill":"rgb(242,187,90)"}, 0.1); 

        this.clockHandTween=TweenLite.to("#clock-hand", 1, {"rotation":"360",transformOrigin:"50% 100%"})
        
    }



    render(){
        return(
            <React.Fragment>
                <svg className="laptop-man" style={{"cursor":"pointer"}} onClick={this.handleSvgClick} width="100%" height="100%" viewBox="0 -100 1528 1147" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="undraw_back_home_nl5c 1">
                    <g id="wall-line">
                    <path id="Vector" d="M408.643 287.332H218.692V290.636H408.643V287.332Z" fill="#F2F2F2"/>
                    <path id="Vector_2" d="M272.964 257.592H270.25V288.158H272.964V257.592Z" fill="#F2F2F2"/>
                    <path id="Vector_3" d="M355.728 257.592H353.015V288.158H355.728V257.592Z" fill="#F2F2F2"/>
                    <path id="Vector_4" d="M343.517 122.111H153.565V125.416H343.517V122.111Z" fill="#F2F2F2"/>
                    <path id="Vector_5" d="M291.959 124.589H289.245V155.155H291.959V124.589Z" fill="#F2F2F2"/>
                    <path id="Vector_6" d="M209.194 124.589H206.48V155.155H209.194V124.589Z" fill="#F2F2F2"/>
                    <path id="Vector_7" d="M644.726 353.42H454.774V356.725H644.726V353.42Z" fill="#F2F2F2"/>
                    <path id="Vector_8" d="M509.046 323.681H506.333V354.246H509.046V323.681Z" fill="#F2F2F2"/>
                    <path id="Vector_9" d="M591.811 323.681H589.097V354.246H591.811V323.681Z" fill="#F2F2F2"/>
                    <path id="Vector_10" d="M579.599 188.199H389.648V191.504H579.599V188.199Z" fill="#F2F2F2"/>
                    <path id="Vector_11" d="M528.041 190.678H525.328V221.244H528.041V190.678Z" fill="#F2F2F2"/>
                    <path id="Vector_12" d="M445.277 190.678H442.563V221.244H445.277V190.678Z" fill="#F2F2F2"/>
                    <path id="Vector_13" d="M517.187 885.432H514.473V915.997H517.187V885.432Z" fill="#F2F2F2"/>
                    <path id="Vector_14" d="M281.104 644.209H91.1528V647.513H281.104V644.209Z" fill="#F2F2F2"/>
                    <path id="Vector_15" d="M229.546 646.687H226.832V677.253H229.546V646.687Z" fill="#F2F2F2"/>
                    <path id="Vector_16" d="M146.781 646.687H144.068V677.253H146.781V646.687Z" fill="#F2F2F2"/>
                    <path id="Vector_17" d="M1291.92 287.332H1101.97V290.636H1291.92V287.332Z" fill="#F2F2F2"/>
                    <path id="Vector_18" d="M1156.24 257.592H1153.52V288.158H1156.24V257.592Z" fill="#F2F2F2"/>
                    <path id="Vector_19" d="M1239 257.592H1236.29V288.158H1239V257.592Z" fill="#F2F2F2"/>
                    <path id="Vector_20" d="M1226.79 122.111H1036.84V125.416H1226.79V122.111Z" fill="#F2F2F2"/>
                    <path id="Vector_21" d="M1175.23 124.589H1172.52V155.155H1175.23V124.589Z" fill="#F2F2F2"/>
                    <path id="Vector_22" d="M1092.47 124.589H1089.75V155.155H1092.47V124.589Z" fill="#F2F2F2"/>
                    <path id="Vector_23" d="M1528 353.42H1338.05V356.725H1528V353.42Z" fill="#F2F2F2"/>
                    <path id="Vector_24" d="M1392.32 323.681H1389.61V354.246H1392.32V323.681Z" fill="#F2F2F2"/>
                    <path id="Vector_25" d="M1475.08 323.681H1472.37V354.246H1475.08V323.681Z" fill="#F2F2F2"/>
                    <path id="Vector_26" d="M1462.87 188.199H1272.92V191.504H1462.87V188.199Z" fill="#F2F2F2"/>
                    <path id="Vector_27" d="M1411.32 190.678H1408.6V221.244H1411.32V190.678Z" fill="#F2F2F2"/>
                    <path id="Vector_28" d="M1328.55 190.678H1325.84V221.244H1328.55V190.678Z" fill="#F2F2F2"/>
                    <path id="Vector_29" d="M1366.54 558.294H1176.59V561.599H1366.54V558.294Z" fill="#F2F2F2"/>
                    <path id="Vector_30" d="M1230.86 528.554H1228.15V559.12H1230.86V528.554Z" fill="#F2F2F2"/>
                    <path id="Vector_31" d="M1313.63 528.554H1310.91V559.12H1313.63V528.554Z" fill="#F2F2F2"/>
                    <path id="Vector_32" d="M1301.42 393.073H1111.46V396.378H1301.42V393.073Z" fill="#F2F2F2"/>
                    <path id="Vector_33" d="M1249.86 395.552H1247.14V426.117H1249.86V395.552Z" fill="#F2F2F2"/>
                    <path id="Vector_34" d="M1167.09 395.552H1164.38V426.117H1167.09V395.552Z" fill="#F2F2F2"/>
                    <path id="Vector_35" d="M1112.82 646.687H1110.11V677.253H1112.82V646.687Z" fill="#F2F2F2"/>
                    <path id="Vector_36" d="M1030.06 646.687H1027.34V677.253H1030.06V646.687Z" fill="#F2F2F2"/>
                    </g>
                    <g id="window-four">
                    <path id="Vector_37" d="M775.49 0H492.427V456.01H775.49V0Z" fill="#3F3D56"/>
                    <path id="Vector_38" d="M1139 547.01H855.937V1003.02H1139V547.01Z" fill="#3F3D56"/>
                    <path id="Vector_39" d="M1139 0H855.937V456.01H1139V0Z" fill="#3F3D56"/>
                    <path id="Vector_40" d="M775.49 547.01H492.427V1003.02H775.49V547.01Z" fill="#3F3D56"/>
                    </g>
                    <g id="clock">
                    <path id="Vector_41" d="M348.248 588.186H345.534V618.752H348.248V588.186Z" fill="#F2F2F2"/>
                    <path id="Vector_42" d="M358.476 614.745C402.294 614.745 437.816 579.223 437.816 535.404C437.816 491.586 402.294 456.064 358.476 456.064C314.657 456.064 279.135 491.586 279.135 535.404C279.135 579.223 314.657 614.745 358.476 614.745Z" fill="#6C63FF"/>
                    <path id="Vector_43" d="M386.125 441.121C378.941 440.208 371.67 440.208 364.486 441.121C348.482 443.223 333.416 449.871 321.077 460.278C308.738 470.685 299.643 484.413 294.871 499.833C292.701 506.861 291.472 514.145 291.217 521.496C291.181 522.517 291.157 523.551 291.157 524.585C291.179 546.896 300.052 568.287 315.828 584.063C331.604 599.839 352.995 608.712 375.306 608.734C377.097 608.734 378.888 608.674 380.655 608.566C384.803 608.305 388.926 607.735 392.989 606.859C412.391 602.686 429.694 591.792 441.843 576.1C453.991 560.407 460.204 540.927 459.383 521.098C458.561 501.27 450.759 482.369 437.355 467.735C423.95 453.101 405.805 443.675 386.125 441.121H386.125ZM401.644 601.978H401.632C394.855 604.291 387.801 605.693 380.655 606.149C378.888 606.27 377.097 606.33 375.306 606.33C353.634 606.303 332.857 597.682 317.533 582.358C302.208 567.034 293.587 546.257 293.561 524.585C293.561 523.551 293.585 522.517 293.621 521.496C294.447 500.375 303.412 480.393 318.637 465.732C333.863 451.071 354.169 442.868 375.306 442.84C394.672 442.841 413.409 449.718 428.179 462.245C442.948 474.771 452.791 492.135 455.953 511.241C459.115 530.348 455.392 549.956 445.446 566.573C435.5 583.191 419.977 595.737 401.644 601.978H401.644Z" fill="#3F3D56"/>
                    <path id="Vector_44" d="M376.508 447.649H374.104V464.479H376.508V447.649Z" fill="#3F3D56"/>
                    <path id="Vector_45" d="M416.957 481.233L418.657 482.934L430.558 471.033L428.858 469.333L416.957 481.233Z" fill="#3F3D56"/>
                    <path id="Vector_46" d="M435.412 523.383V525.787H452.242V523.383H435.412Z" fill="#3F3D56"/>
                    <path id="Vector_47" d="M418.657 566.237L416.957 567.937L428.858 579.837L430.558 578.137L418.657 566.237Z" fill="#3F3D56"/>
                    <path id="Vector_48" d="M376.508 584.692H374.104V601.521H376.508V584.692Z" fill="#3F3D56"/>
                    <path id="Vector_49" d="M378.912 519.777C377.872 518.996 376.606 518.574 375.306 518.574C374.005 518.574 372.74 518.996 371.699 519.777C370.987 520.318 370.401 521.007 369.98 521.796C369.448 522.813 369.217 523.961 369.316 525.104C369.415 526.248 369.84 527.339 370.539 528.249C371.239 529.159 372.184 529.849 373.263 530.239C374.343 530.629 375.511 530.702 376.631 530.449C377.75 530.195 378.774 529.627 379.581 528.811C380.387 527.994 380.944 526.964 381.183 525.842C381.423 524.72 381.337 523.552 380.934 522.477C380.532 521.402 379.83 520.465 378.912 519.777H378.912ZM375.306 528.191C374.35 528.189 373.434 527.808 372.759 527.132C372.083 526.456 371.702 525.541 371.699 524.585C371.704 523.856 371.926 523.144 372.336 522.541C372.689 522.031 373.167 521.621 373.724 521.349C374.281 521.078 374.899 520.955 375.518 520.992C376.137 521.03 376.736 521.226 377.256 521.562C377.777 521.899 378.202 522.364 378.49 522.913C378.779 523.461 378.921 524.075 378.902 524.695C378.884 525.315 378.706 525.919 378.386 526.45C378.066 526.981 377.614 527.42 377.074 527.725C376.535 528.03 375.926 528.191 375.306 528.191V528.191Z" fill="#3F3D56"/>
                    <path id="Vector_50" d="M386.125 420H364.486V441.638H386.125V420Z" fill="#3F3D56"/>
                    <path id="Vector_51" d="M375.851 420.436C391.785 420.436 404.702 415.861 404.702 410.218C404.702 404.575 391.785 400 375.851 400C359.917 400 347 404.575 347 410.218C347 415.861 359.917 420.436 375.851 420.436Z" fill="#3F3D56"/>
                    <path id="Vector_52" d="M489.896 605.071H263.896V607.476H489.896V605.071Z" fill="#3F3D56"/>
                    </g>
                    <g id="hands-svg">
                    <path id="Vector_53" d="M1034.5 867.566C1027.01 875.686 1008.45 887.916 985.95 901.156C977.58 906.076 968.67 911.146 959.58 916.186C937.89 928.216 915.18 940.136 896.44 949.766C872.06 962.296 854.39 970.946 854.39 970.946C854.39 970.946 852.87 963.326 850.42 953.576C847.14 940.526 842.2 923.656 837.05 916.186C836.87 915.926 836.69 915.686 836.51 915.446C835.01 913.476 833.5 912.326 832.01 912.326L906.43 866.196L938.59 846.256L915.42 790.946L886.36 721.566L903.9 665.756L921.53 609.656H954.57C954.57 609.656 965.51 633.536 979.5 666.836C981.59 671.816 983.75 677.006 985.95 682.366C1014.73 752.366 1050.61 850.116 1034.5 867.566Z" fill="#D0CDE1"/>
                    <path id="Vector_54" d="M701.99 915.526C699.276 915.516 696.567 915.736 693.89 916.186C670.9 920.136 664.12 940.946 662.19 954.886C661.572 959.143 661.338 963.447 661.49 967.746L641.18 952.126L633.78 946.436C615.97 940.226 600.1 929.196 586.34 916.186C574.403 904.7 563.695 892.001 554.39 878.296C545.122 864.788 536.86 850.616 529.67 835.896C527.664 831.788 526.586 827.29 526.511 822.719C526.437 818.148 527.369 813.617 529.24 809.446L554.39 753.396L591.15 671.476C591.42 669.526 591.717 667.619 592.04 665.756C599.33 623.956 618.86 605.396 618.86 605.396H633.78L643.76 665.756L656.16 740.746L647.47 769.086L627.39 834.536L646.58 855.376L701.99 915.526Z" fill="#D0CDE1"/>
                    </g>
                    <g id="star-cloud-windowRef">
                    <path id="Vector_55" d="M653.886 208.178C654.635 208.178 655.243 207.439 655.243 206.526C655.243 205.614 654.635 204.874 653.886 204.874C653.137 204.874 652.529 205.614 652.529 206.526C652.529 207.439 653.137 208.178 653.886 208.178Z" fill="white"/>
                    <path id="Vector_56" d="M657.934 176C658.486 176 658.934 175.552 658.934 175C658.934 174.448 658.486 174 657.934 174C657.382 174 656.934 174.448 656.934 175C656.934 175.552 657.382 176 657.934 176Z" fill="white"/>
                    <path id="Vector_57" d="M598 356C598.552 356 599 355.552 599 355C599 354.448 598.552 354 598 354C597.448 354 597 354.448 597 355C597 355.552 597.448 356 598 356Z" fill="white"/>
                    <path id="Vector_58" d="M626 260C626.552 260 627 259.552 627 259C627 258.448 626.552 258 626 258C625.448 258 625 258.448 625 259C625 259.552 625.448 260 626 260Z" fill="white"/>
                    <path id="Vector_59" d="M702 275C702.552 275 703 274.552 703 274C703 273.448 702.552 273 702 273C701.448 273 701 273.448 701 274C701 274.552 701.448 275 702 275Z" fill="white"/>
                    <path id="Vector_60" d="M686 174C686.552 174 687 173.552 687 173C687 172.448 686.552 172 686 172C685.448 172 685 172.448 685 173C685 173.552 685.448 174 686 174Z" fill="white"/>
                    <path id="Vector_61" d="M904 228C904.552 228 905 227.552 905 227C905 226.448 904.552 226 904 226C903.448 226 903 226.448 903 227C903 227.552 903.448 228 904 228Z" fill="white"/>
                    <path id="Vector_62" d="M954 367C954.552 367 955 366.552 955 366C955 365.448 954.552 365 954 365C953.448 365 953 365.448 953 366C953 366.552 953.448 367 954 367Z" fill="white"/>
                    <path id="Vector_63" d="M1050 595C1050.55 595 1051 594.552 1051 594C1051 593.448 1050.55 593 1050 593C1049.45 593 1049 593.448 1049 594C1049 594.552 1049.45 595 1050 595Z" fill="white"/>
                    <path id="Vector_64" d="M1032 664C1032.55 664 1033 663.552 1033 663C1033 662.448 1032.55 662 1032 662C1031.45 662 1031 662.448 1031 663C1031 663.552 1031.45 664 1032 664Z" fill="white"/>
                    <path id="Vector_65" d="M1101 630C1101.55 630 1102 629.552 1102 629C1102 628.448 1101.55 628 1101 628C1100.45 628 1100 628.448 1100 629C1100 629.552 1100.45 630 1101 630Z" fill="white"/>
                    <path id="Vector_66" d="M670 230C670.552 230 671 229.552 671 229C671 228.448 670.552 228 670 228C669.448 228 669 228.448 669 229C669 229.552 669.448 230 670 230Z" fill="white"/>
                    <path id="Vector_67" d="M1086 273C1086.55 273 1087 272.552 1087 272C1087 271.448 1086.55 271 1086 271C1085.45 271 1085 271.448 1085 272C1085 272.552 1085.45 273 1086 273Z" fill="white"/>
                    <path id="Vector_68" d="M1103 109C1103.55 109 1104 108.552 1104 108C1104 107.448 1103.55 107 1103 107C1102.45 107 1102 107.448 1102 108C1102 108.552 1102.45 109 1103 109Z" fill="white"/>
                    <path id="Vector_69" d="M918 29C918.552 29 919 28.5523 919 28C919 27.4477 918.552 27 918 27C917.448 27 917 27.4477 917 28C917 28.5523 917.448 29 918 29Z" fill="white"/>
                    <path id="Vector_70" d="M1026 31C1026.55 31 1027 30.5523 1027 30C1027 29.4477 1026.55 29 1026 29C1025.45 29 1025 29.4477 1025 30C1025 30.5523 1025.45 31 1026 31Z" fill="white"/>
                    <path id="Vector_71" d="M1031 324C1031.55 324 1032 323.552 1032 323C1032 322.448 1031.55 322 1031 322C1030.45 322 1030 322.448 1030 323C1030 323.552 1030.45 324 1031 324Z" fill="white"/>
                    <path id="Vector_72" d="M554 370C554.552 370 555 369.552 555 369C555 368.448 554.552 368 554 368C553.448 368 553 368.448 553 369C553 369.552 553.448 370 554 370Z" fill="white"/>
                    <path id="Vector_73" d="M613 259C613.552 259 614 258.552 614 258C614 257.448 613.552 257 613 257C612.448 257 612 257.448 612 258C612 258.552 612.448 259 613 259Z" fill="white"/>
                    <path id="Vector_74" d="M624 315C624.552 315 625 314.552 625 314C625 313.448 624.552 313 624 313C623.448 313 623 313.448 623 314C623 314.552 623.448 315 624 315Z" fill="white"/>
                    <path id="Vector_75" d="M702 275C702.552 275 703 274.552 703 274C703 273.448 702.552 273 702 273C701.448 273 701 273.448 701 274C701 274.552 701.448 275 702 275Z" fill="white"/>
                    <path className="cloud" id="Vector_76" opacity="0.1" d="M1050.8 99.6H1022.98C1028.77 98.43 1032.89 95.6 1032.89 92.23C1032.89 88.86 1028.77 86.03 1022.98 84.86H1035.13C1043.75 84.86 1050.81 81.29 1050.81 76.93C1050.81 72.57 1043.76 69 1035.13 69H936.59C927.97 69 920.91 72.57 920.91 76.93C920.91 80.26 925.03 83.13 930.82 84.3H918.68C910.06 84.3 903 87.87 903 92.23C903 96.59 910.05 100.16 918.68 100.16H946.5C940.71 101.33 936.59 104.16 936.59 107.53C936.59 111.89 943.64 115.46 952.27 115.46H1050.8C1059.42 115.46 1066.48 111.89 1066.48 107.53C1066.48 103.17 1059.42 99.6 1050.8 99.6Z" fill="white"/>
                    <path className="cloud" id="Vector_77" opacity="0.1" d="M1050.8 185.6H1022.98C1028.77 184.43 1032.89 181.6 1032.89 178.23C1032.89 174.86 1028.77 172.03 1022.98 170.86H1035.13C1043.75 170.86 1050.81 167.29 1050.81 162.93C1050.81 158.57 1043.76 155 1035.13 155H936.59C927.97 155 920.91 158.57 920.91 162.93C920.91 166.26 925.03 169.13 930.82 170.3H918.68C910.06 170.3 903 173.87 903 178.23C903 182.59 910.05 186.16 918.68 186.16H946.5C940.71 187.33 936.59 190.16 936.59 193.53C936.59 197.89 943.64 201.46 952.27 201.46H1050.8C1059.42 201.46 1066.48 197.89 1066.48 193.53C1066.48 189.17 1059.42 185.6 1050.8 185.6Z" fill="white"/>
                    <path className="cloud" id="Vector_78" opacity="0.1" d="M750.52 116.6H729.52C733.89 115.43 737 112.6 737 109.23C737 105.86 733.89 103.03 729.52 101.86H738.69C745.2 101.86 750.52 98.29 750.52 93.93C750.52 89.57 745.2 86 738.69 86H664.35C657.84 86 652.52 89.57 652.52 93.93C652.52 97.26 655.63 100.13 660 101.3H650.83C644.32 101.3 639 104.87 639 109.23C639 113.59 644.32 117.16 650.83 117.16H671.83C667.46 118.33 664.35 121.16 664.35 124.53C664.35 128.89 669.67 132.46 676.18 132.46H750.53C757.04 132.46 762.36 128.89 762.36 124.53C762.36 120.17 757.01 116.6 750.52 116.6Z" fill="white"/>
                    <path id="Vector_79" opacity="0.1" d="M1139 155V223.863L855 325V292.529L1139 155Z" fill="white"/>
                    <path id="Vector_80" opacity="0.1" d="M614 390L775 324V341.472L614 390Z" fill="white"/>
                    </g>
                    <g id="clock-hand">
                    <path id="Vector_81" d="M378.912 478.904H371.699V519.777H378.912V478.904Z" fill="#3F3D56"/>
                    </g>
                    <g id="sun-svg">
                    <path id="Vector_82" d="M577.905 185.047C604.132 185.047 625.393 159.157 625.393 127.22C625.393 95.283 604.132 69.3928 577.905 69.3928C551.679 69.3928 530.417 95.283 530.417 127.22C530.417 159.157 551.679 185.047 577.905 185.047Z" fill="white"/>
                    <g id="man-laptop">
                    <path id="Vector_83" d="M434.422 885.432H431.709V915.997H434.422V885.432Z" fill="#F2F2F2"/>
                    <path id="Vector_84" d="M1317.7 885.432H1314.98V915.997H1317.7V885.432Z" fill="#F2F2F2"/>
                    <path id="Vector_85" d="M1436.76 1001.45H129.471V1005.16H1436.76V1001.45Z" fill="#2F2E41"/>
                    <path id="Vector_86" d="M877.757 784.799C878.507 784.799 879.114 784.059 879.114 783.147C879.114 782.234 878.507 781.495 877.757 781.495C877.008 781.495 876.401 782.234 876.401 783.147C876.401 784.059 877.008 784.799 877.757 784.799Z" fill="white"/>
                    <path id="Vector_87" d="M591.474 898.802C592.223 898.802 592.83 898.062 592.83 897.149C592.83 896.237 592.223 895.497 591.474 895.497C590.724 895.497 590.117 896.237 590.117 897.149C590.117 898.062 590.724 898.802 591.474 898.802Z" fill="white"/>
                    <path id="Vector_88" d="M932.029 655.927C932.779 655.927 933.386 655.187 933.386 654.275C933.386 653.362 932.779 652.622 932.029 652.622C931.28 652.622 930.672 653.362 930.672 654.275C930.672 655.187 931.28 655.927 932.029 655.927Z" fill="white"/>
                    <path id="Vector_89" d="M858.762 408.096C859.512 408.096 860.119 407.356 860.119 406.443C860.119 405.531 859.512 404.791 858.762 404.791C858.013 404.791 857.406 405.531 857.406 406.443C857.406 407.356 858.013 408.096 858.762 408.096Z" fill="white"/>
                    <path id="Vector_90" d="M594.187 750.103C594.936 750.103 595.544 749.363 595.544 748.451C595.544 747.538 594.936 746.798 594.187 746.798C593.438 746.798 592.83 747.538 592.83 748.451C592.83 749.363 593.438 750.103 594.187 750.103Z" fill="white"/>
                    <path id="Vector_91" d="M710.871 875.671C711.621 875.671 712.228 874.931 712.228 874.018C712.228 873.106 711.621 872.366 710.871 872.366C710.122 872.366 709.515 873.106 709.515 874.018C709.515 874.931 710.122 875.671 710.871 875.671Z" fill="white"/>
                    <path id="Vector_92" opacity="0.1" d="M831.871 546.881H852.562C845.384 551.392 838.18 555.869 830.948 560.314V547.509L831.871 546.881Z" fill="white"/>
                    <path id="Vector_93" opacity="0.1" d="M1139 688V701.709C1063.92 752.019 995.328 794.563 993 796L1139 688Z" fill="white"/>
                    <path id="Vector_94" d="M781.922 516.941C822.534 516.941 855.458 484.018 855.458 443.405C855.458 402.792 822.534 369.869 781.922 369.869C741.309 369.869 708.385 402.792 708.385 443.405C708.385 484.018 741.309 516.941 781.922 516.941Z" fill="#A0616A"/>
                    <path id="Vector_95" d="M727.036 480.173C727.036 480.173 740.891 584.616 719.576 596.339C698.261 608.062 846.399 609.128 846.399 609.128C846.399 609.128 813.361 518.54 828.281 490.83L727.036 480.173Z" fill="#A0616A"/>
                    <path id="Vector_96" d="M954.57 609.656L942.25 665.756L916.2 784.446L915.42 790.946L906.43 866.196L900.45 916.186L896.44 949.766C872.06 962.296 854.39 970.946 854.39 970.946C854.39 970.946 852.87 963.326 850.42 953.576C833.31 958.706 801.65 967.216 774.82 968.916C784.59 979.806 789.08 990.036 782.99 997.586C764.61 1020.35 688.73 972.666 662.19 954.886C661.572 959.143 661.338 963.447 661.49 967.746L641.18 952.126L643.19 916.186L646.58 855.376L650.84 779.116C649.497 775.851 648.371 772.5 647.47 769.086C641.25 746.966 633.7 702.796 627.91 665.756C623.25 635.946 619.75 610.756 619.01 605.396C618.91 604.696 618.86 604.336 618.86 604.336L731.29 554.656C739.28 573.186 776.59 578.756 776.59 578.756C807.5 576.626 831.73 560.326 831.73 560.326L954.57 609.656Z" fill="#D0CDE1"/>
                    <path id="Vector_97" d="M862.92 949.636C862.92 949.636 858.16 951.266 850.42 953.576C833.31 958.706 801.65 967.216 774.82 968.916C751.72 970.396 732.2 966.836 728.63 951.766C727.1 945.286 729.27 939.956 734 935.576C748.12 922.486 785 917.796 814.25 916.186C822.51 915.736 830.15 915.526 836.51 915.446C847.31 915.306 854.39 915.526 854.39 915.526L854.56 916.186L862.92 949.636Z" fill="#A0616A"/>
                    <path id="Vector_98" d="M720.746 373.847L706.997 368.342C706.997 368.342 735.746 336.691 775.744 339.444L764.494 327.059C764.494 327.059 791.993 316.05 816.992 344.948C830.134 360.139 845.339 377.996 854.817 398.111H869.542L863.396 411.643L884.906 425.175L862.829 422.744C864.144 430.154 864.346 437.719 863.428 445.189C862.481 452.661 858.668 459.473 852.793 464.187C852.793 464.187 835.741 428.891 835.741 423.387V437.148C835.741 437.148 821.992 424.763 821.992 416.506L814.492 426.139L810.743 411.002L764.495 426.139L771.994 413.754L743.245 417.883L754.495 402.745C754.495 402.745 721.997 420.635 720.746 435.772C719.497 450.909 709.984 465.253 709.984 465.253C709.984 465.253 684.498 394.488 720.746 373.847Z" fill="#2F2E41"/>
                    <path id="Vector_99" d="M782.99 997.586C764.61 1020.35 688.73 972.666 662.19 954.886C656.41 951.016 652.97 948.566 652.97 948.566L677.25 916.186L684.94 905.936C684.94 905.936 691.82 909.586 701.99 915.526C702.36 915.746 702.73 915.966 703.11 916.186C711.88 921.336 722.89 928.066 734 935.576C749.33 945.946 764.83 957.776 774.82 968.916C784.59 979.806 789.08 990.036 782.99 997.586Z" fill="#A0616A"/>
                    <path id="Vector_100" d="M718.877 740.806L731.631 755.687C736.37 754.783 741.319 753.721 746.416 752.529L742.752 740.806L751.71 751.256C805.707 737.975 872.637 712.155 872.637 712.155C872.637 712.155 800.379 717.453 746.428 705.666C722.558 700.451 697.998 712.284 688.202 734.669C682.508 747.679 683.403 758.951 703.596 758.951C710.419 758.835 717.223 758.195 723.949 757.037L718.877 740.806Z" fill="#BA2F2F"/>
                    <path id="Vector_101" d="M1009.65 985.386V991.456C1009.65 993.122 1009.35 994.774 1008.74 996.326C1008.47 997.018 1008.15 997.687 1007.77 998.326C1006.58 1000.33 1004.89 1001.98 1002.86 1003.13C1000.84 1004.28 998.549 1004.89 996.22 1004.89H549.67C547.342 1004.89 545.053 1004.28 543.028 1003.13C541.003 1001.98 539.312 1000.33 538.12 998.326C537.743 997.687 537.419 997.018 537.15 996.326C536.546 994.774 536.237 993.122 536.24 991.456V985.386C536.24 983.622 536.587 981.876 537.262 980.246C537.936 978.616 538.926 977.136 540.173 975.888C541.42 974.641 542.901 973.652 544.53 972.977C546.16 972.303 547.906 971.956 549.67 971.956H575.41V969.126C575.41 969.052 575.425 968.979 575.453 968.911C575.481 968.844 575.522 968.782 575.574 968.73C575.626 968.678 575.688 968.636 575.756 968.608C575.824 968.58 575.897 968.566 575.97 968.566H589.4C589.474 968.566 589.547 968.58 589.615 968.608C589.683 968.636 589.745 968.678 589.797 968.73C589.849 968.782 589.89 968.844 589.918 968.911C589.946 968.979 589.96 969.052 589.96 969.126V971.956H598.35V969.126C598.35 969.052 598.365 968.979 598.393 968.911C598.421 968.844 598.462 968.782 598.514 968.73C598.566 968.678 598.628 968.636 598.696 968.608C598.764 968.58 598.837 968.566 598.91 968.566H612.34C612.414 968.566 612.487 968.58 612.555 968.608C612.623 968.636 612.684 968.678 612.736 968.73C612.789 968.782 612.83 968.844 612.858 968.911C612.886 968.979 612.9 969.052 612.9 969.126V971.956H621.3V969.126C621.3 969.052 621.315 968.979 621.343 968.911C621.371 968.844 621.412 968.782 621.464 968.73C621.516 968.678 621.578 968.636 621.646 968.608C621.714 968.58 621.787 968.566 621.86 968.566H635.29C635.364 968.566 635.437 968.58 635.505 968.608C635.573 968.636 635.634 968.678 635.686 968.73C635.739 968.782 635.78 968.844 635.808 968.911C635.836 968.979 635.85 969.052 635.85 969.126V971.956H644.24V969.126C644.24 969.052 644.255 968.979 644.283 968.911C644.311 968.844 644.352 968.782 644.404 968.73C644.456 968.678 644.518 968.636 644.586 968.608C644.654 968.58 644.727 968.566 644.8 968.566H658.23C658.304 968.566 658.377 968.58 658.445 968.608C658.513 968.636 658.574 968.678 658.626 968.73C658.678 968.782 658.72 968.844 658.748 968.911C658.776 968.979 658.79 969.052 658.79 969.126V971.956H667.18V969.126C667.18 969.052 667.194 968.979 667.223 968.911C667.251 968.844 667.292 968.782 667.344 968.73C667.396 968.678 667.458 968.636 667.526 968.608C667.594 968.58 667.667 968.566 667.74 968.566H681.17C681.244 968.566 681.317 968.58 681.385 968.608C681.453 968.636 681.514 968.678 681.566 968.73C681.618 968.782 681.66 968.844 681.688 968.911C681.716 968.979 681.73 969.052 681.73 969.126V971.956H690.13V969.126C690.13 969.052 690.145 968.979 690.173 968.911C690.201 968.844 690.242 968.782 690.294 968.73C690.346 968.678 690.408 968.636 690.476 968.608C690.544 968.58 690.617 968.566 690.69 968.566H704.12C704.194 968.566 704.267 968.58 704.335 968.608C704.403 968.636 704.464 968.678 704.516 968.73C704.569 968.782 704.61 968.844 704.638 968.911C704.666 968.979 704.68 969.052 704.68 969.126V971.956H713.07V969.126C713.07 969.052 713.085 968.979 713.113 968.911C713.141 968.844 713.182 968.782 713.234 968.73C713.286 968.678 713.348 968.636 713.416 968.608C713.484 968.58 713.557 968.566 713.63 968.566H818.83C818.904 968.566 818.977 968.58 819.045 968.608C819.113 968.636 819.174 968.678 819.227 968.73C819.279 968.782 819.32 968.844 819.348 968.911C819.376 968.979 819.39 969.052 819.39 969.126V971.956H827.79V969.126C827.79 969.052 827.804 968.979 827.833 968.911C827.861 968.844 827.902 968.782 827.954 968.73C828.006 968.678 828.068 968.636 828.136 968.608C828.204 968.58 828.277 968.566 828.35 968.566H841.78C841.928 968.567 842.07 968.627 842.175 968.732C842.279 968.836 842.339 968.978 842.34 969.126V971.956H850.73V969.126C850.73 969.052 850.745 968.979 850.773 968.911C850.801 968.844 850.842 968.782 850.894 968.73C850.946 968.678 851.008 968.636 851.076 968.608C851.144 968.58 851.217 968.566 851.29 968.566H864.72C864.794 968.566 864.867 968.58 864.935 968.608C865.003 968.636 865.065 968.678 865.117 968.73C865.169 968.782 865.21 968.844 865.238 968.911C865.266 968.979 865.28 969.052 865.28 969.126V971.956H873.67V969.126C873.67 969.052 873.685 968.979 873.713 968.911C873.741 968.844 873.782 968.782 873.834 968.73C873.886 968.678 873.948 968.636 874.016 968.608C874.084 968.58 874.157 968.566 874.23 968.566H887.66C887.734 968.566 887.807 968.58 887.875 968.608C887.943 968.636 888.005 968.678 888.057 968.73C888.109 968.782 888.15 968.844 888.178 968.911C888.206 968.979 888.22 969.052 888.22 969.126V971.956H896.62V969.126C896.62 969.052 896.635 968.979 896.663 968.911C896.691 968.844 896.732 968.782 896.784 968.73C896.836 968.678 896.898 968.636 896.966 968.608C897.034 968.58 897.107 968.566 897.18 968.566H910.61C910.757 968.568 910.898 968.628 911.001 968.733C911.104 968.838 911.161 968.979 911.16 969.126V971.956H919.56V969.126C919.56 969.052 919.575 968.979 919.603 968.911C919.631 968.844 919.672 968.782 919.724 968.73C919.776 968.678 919.838 968.636 919.906 968.608C919.974 968.58 920.047 968.566 920.12 968.566H933.55C933.624 968.566 933.697 968.58 933.765 968.608C933.833 968.636 933.895 968.678 933.947 968.73C933.999 968.782 934.04 968.844 934.068 968.911C934.096 968.979 934.11 969.052 934.11 969.126V971.956H942.5V969.126C942.5 969.052 942.515 968.979 942.543 968.911C942.571 968.844 942.612 968.782 942.664 968.73C942.716 968.678 942.778 968.636 942.846 968.608C942.914 968.58 942.987 968.566 943.06 968.566H956.49C956.564 968.566 956.637 968.58 956.705 968.608C956.773 968.636 956.835 968.678 956.887 968.73C956.939 968.782 956.98 968.844 957.008 968.911C957.036 968.979 957.05 969.052 957.05 969.126V971.956H996.22C997.984 971.956 999.731 972.303 1001.36 972.977C1002.99 973.652 1004.47 974.641 1005.72 975.888C1006.96 977.136 1007.95 978.616 1008.63 980.246C1009.3 981.876 1009.65 983.622 1009.65 985.386Z" fill="#9A98A8"/>
                    <path id="Vector_102" d="M1139.5 996.326H406.5V998.326H1139.5V996.326Z" fill="#3F3D56"/>
                    <path id="Vector_103" d="M973.695 729.757H807.252V726.326H731.78V729.757H564.651C561.665 729.757 558.801 730.943 556.69 733.054C554.579 735.166 553.392 738.029 553.392 741.015V968.927C553.392 971.913 554.578 974.776 556.69 976.888C558.801 978.999 561.665 980.185 564.651 980.185H973.695C976.68 980.185 979.544 978.999 981.656 976.888C983.767 974.776 984.953 971.913 984.953 968.927V741.015C984.953 739.537 984.662 738.073 984.096 736.707C983.53 735.341 982.701 734.1 981.656 733.054C980.61 732.009 979.369 731.179 978.003 730.614C976.637 730.048 975.173 729.757 973.695 729.757Z" fill="#9A98A8"/>
                    <path id="Vector_104" d="M769.5 834.326C783.307 834.326 794.5 823.133 794.5 809.326C794.5 795.519 783.307 784.326 769.5 784.326C755.693 784.326 744.5 795.519 744.5 809.326C744.5 823.133 755.693 834.326 769.5 834.326Z" stroke="#D0CDE1" stroke-width="2" stroke-miterlimit="10"/>
                    <path id="Vector_105" d="M761.5 843.326C775.307 843.326 786.5 832.133 786.5 818.326C786.5 804.519 775.307 793.326 761.5 793.326C747.693 793.326 736.5 804.519 736.5 818.326C736.5 832.133 747.693 843.326 761.5 843.326Z" fill="#D0CDE1"/>
                    <path id="Vector_106" d="M437.45 964.223V998.223H471.45V964.223H437.45ZM469.97 996.743H438.92V965.703H469.97V996.743Z" fill="#3F3D56"/>
                    <path id="Vector_107" d="M496.594 924.754C497.527 956.704 478.859 968.413 455.431 969.097C454.886 969.113 454.345 969.123 453.805 969.126C452.719 969.135 451.643 969.116 450.578 969.072C429.389 968.192 412.617 956.945 411.75 927.232C410.852 896.482 449.019 856.529 451.882 853.573L451.887 853.571C451.996 853.458 452.052 853.402 452.052 853.402C452.052 853.402 495.661 892.807 496.594 924.754Z" fill="#D0CDE1"/>
                    <path id="Vector_108" d="M453.744 964.255L468.626 942.124L453.774 966.636L453.805 969.126C452.719 969.135 451.643 969.116 450.577 969.072L451.316 937.06L451.295 936.813L451.323 936.766L451.393 933.741L435.095 910.078L451.374 931.477L451.432 932.116L451.989 907.93L437.912 883.397L452.029 903.681L451.882 853.573L451.882 853.407L451.887 853.571L452.822 893.062L465.651 877.021L452.864 896.464L453.144 918.098L464.949 896.984L453.187 921.279L453.343 933.308L470.512 903.897L453.395 937.505L453.744 964.255Z" fill="#3F3D56"/>
                    <path id="Vector_109" d="M1360.18 856.339H1358.18V874.839H1360.18V856.339Z" fill="#F2F2F2"/>
                    <path id="Vector_110" d="M1342.18 890.839H1202.18V892.839H1342.18V890.839Z" fill="#F2F2F2"/>
                    <path id="Vector_111" d="M1242.18 872.839H1240.18V891.339H1242.18V872.839Z" fill="#F2F2F2"/>
                    <path id="Vector_112" d="M1303.18 872.839H1301.18V891.339H1303.18V872.839Z" fill="#F2F2F2"/>
                    <path id="Vector_113" d="M1258.93 1002.93C1297.04 1002.93 1327.93 998.231 1327.93 992.432C1327.93 986.633 1297.04 981.932 1258.93 981.932C1220.83 981.932 1189.93 986.633 1189.93 992.432C1189.93 998.231 1220.83 1002.93 1258.93 1002.93Z" fill="#3F3D56"/>
                    <path id="Vector_114" d="M1339.14 880.818C1321.74 945.162 1262.11 985.013 1262.11 985.013C1262.11 985.013 1230.72 920.54 1248.12 856.195C1265.53 791.85 1325.15 752 1325.15 752C1325.15 752 1356.55 816.473 1339.14 880.818Z" fill="#F94F19"/>
                    <path id="Vector_115" d="M1180.79 880.818C1198.2 945.162 1257.82 985.013 1257.82 985.013C1257.82 985.013 1289.22 920.54 1271.81 856.195C1254.41 791.85 1194.78 752 1194.78 752C1194.78 752 1163.39 816.473 1180.79 880.818Z" fill="#FF7B51"/>
                    <path id="Vector_116" d="M1206.37 866.989C1254.13 913.485 1259.97 984.96 1259.97 984.96C1259.97 984.96 1188.36 981.05 1140.6 934.555C1092.83 888.059 1087 816.584 1087 816.584C1087 816.584 1158.61 820.493 1206.37 866.989Z" fill="#EFA38B"/>
                    <path id="Vector_117" d="M1313.56 866.989C1265.8 913.485 1259.97 984.96 1259.97 984.96C1259.97 984.96 1331.57 981.05 1379.34 934.555C1427.1 888.059 1432.93 816.584 1432.93 816.584C1432.93 816.584 1361.33 820.493 1313.56 866.989Z" fill="#FB3C00"/>
                    </g>
                    </g>
                    </g>
                 </svg>


            </React.Fragment>
        )
    }
}