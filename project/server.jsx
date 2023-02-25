const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/bundle.jsx", (req, res) => {
  res.type("text/jsx");
  res.sendFile(__dirname + "/public/bundle.jsx");
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(__dirname + "/public/favicon.ico");
});

app.get(
  "/%3Csvg%20id=%22logo-78%22%20viewBox=%220%200%20175%2040%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath%20class=%22ccustom%22%20d=%22M170.394%207.66415L174.568%2011.8668C174.714%2011.9829%20174.822%2012.1396%20174.878%2012.3171C174.963%2013.3515%20174.18%2013.4081%20173.38%2013.4659C173.034%2013.4909%20172.685%2013.5162%20172.402%2013.621C170.998%2014.0009%20169.746%2014.8033%20168.815%2015.9193C167.883%2017.0353%20167.318%2018.4109%20167.195%2019.8593C167.105%2020.0266%20166.969%2020.1643%20166.802%2020.2558C166.636%2020.3474%20166.447%2020.3888%20166.257%2020.3753C166.037%2020.3558%20165.831%2020.2595%20165.675%2020.1032L164.305%2018.7238C164.315%2018.8182%20164.315%2018.9117%20164.315%2018.9869V19.8968C164.315%2019.9543%20164.317%2020.0097%20164.31%2020.065C164.301%2020.127%20164.28%2020.1888%20164.231%2020.2532V20.3377C164.231%2020.3808%20164.236%2020.4209%20164.241%2020.4616C164.251%2020.5449%20164.262%2020.6307%20164.231%2020.7505C164.201%2020.8622%20164.198%2020.9925%20164.194%2021.1088C164.193%2021.1779%20164.191%2021.2421%20164.184%2021.2945C164.174%2021.3672%20164.174%2021.4448%20164.168%2021.5223C164.162%2021.5949%20164.15%2021.6674%20164.118%2021.7354C164.074%2021.8306%20164.059%2021.9215%20164.055%2022.0139C164.052%2022.0581%20164.052%2022.1026%20164.052%2022.1482L163.996%2022.439L161.867%2032.5891L161.698%2033.3489L161.632%2034.4559L160.694%2039.2495L160.544%2040H84.6248L84.2589%2039.6341L84.1932%2039.9531H76.0694L71.5478%2035.4034L71.9793%2033.3489H69.4277L67.8424%2031.7448C65.8749%2033.1775%2063.4934%2033.9285%2061.06%2033.8837C58.4442%2033.9866%2055.8941%2033.0488%2053.9681%2031.2758L51.5009%2028.7899L50.9662%2031.2851C50.9006%2031.6416%2050.8161%2031.9794%2050.7223%2032.3077L50.6379%2032.6173L50.4972%2033.0675C50.4856%2033.1066%2050.4699%2033.1444%2050.4503%2033.1801C50.3106%2033.5937%2050.1446%2033.9979%2049.9531%2034.3902C49.9581%2034.4054%2049.9581%2034.4219%2049.9531%2034.4371C49.9285%2034.4891%2049.9003%2034.5392%2049.8686%2034.5872C49.727%2034.8675%2049.5705%2035.1399%2049.3996%2035.4034C49.3679%2035.4513%2049.3397%2035.5015%2049.3152%2035.5535L49.212%2035.666C48.9827%2035.9949%2048.732%2036.3082%2048.4615%2036.6041C48.3873%2036.6783%2048.3131%2036.748%2048.2377%2036.8164C48.1607%2036.8864%2048.0825%2036.9551%2048.0018%2037.0262L47.7955%2037.2232C47.6654%2037.3313%2047.5323%2037.4356%2047.3964%2037.5361C47.2843%2037.619%2047.1703%2037.6992%2047.0544%2037.7767C45.1211%2038.9222%2042.891%2039.4674%2040.6473%2039.3433C37.5516%2039.3433%2035.075%2038.4427%2033.5084%2036.8668L29.0994%2032.4296C27.3383%2033.4262%2025.3442%2033.9377%2023.3208%2033.9118C20.7129%2033.9925%2018.1782%2033.042%2016.2664%2031.2664L13.7993%2028.7805L13.0019%2032.6173L12.8424%2033.3771H4.54036L0%2028.7992L0.234521%2027.6923L5.22515%203.72418L5.37521%202.97372H13.7054L13.9212%203.18013V2.97372H70.0469L70.2533%203.18013V2.97372H78.3771L82.9174%207.55158L82.6923%208.64913L82.4484%209.8499H84.7842L85.1501%2010.2158C86.1779%209.61344%2087.3453%209.29005%2088.5366%209.27769C89.4126%209.26039%2090.2825%209.42678%2091.0903%209.76608C91.8982%2010.1054%2092.626%2010.61%2093.227%2011.2476L93.105%2011.1069L95.3095%2013.3302C96.651%2010.8068%2099.6622%209.27769%20103.752%209.27769C106.923%209.27769%20109.259%2010.0844%20110.675%2011.5478L112.27%2013.152L112.805%2010.5722L112.964%209.82173H121.097L123.424%2012.1576L123.752%2010.5816L123.912%209.83112H139.916L140.347%2010.2627C141.431%209.62306%20142.672%209.29818%20143.931%209.32458C144.688%209.29503%20145.442%209.43365%20146.14%209.73047C146.837%2010.0273%20147.46%2010.475%20147.964%2011.0413C147.938%2011.0118%20147.913%2010.9823%20147.888%2010.9533C147.843%2010.8995%20147.798%2010.847%20147.75%2010.7984L148.565%2011.6135C149.275%2010.8782%20150.129%2010.2959%20151.072%209.90235C152.016%209.50877%20153.03%209.3121%20154.052%209.32458C154.595%209.2912%20155.137%209.3374%20155.663%209.46033L154.775%208.56473C154.654%208.43528%20154.572%208.27421%20154.539%208.10021C154.506%207.92621%20154.523%207.74631%20154.587%207.58147C154.652%207.41657%20154.762%207.27343%20154.905%207.16854C155.048%207.06365%20155.217%207.00129%20155.394%206.98875H156.107C156.299%206.97043%20156.49%206.94226%20156.679%206.9043C157.676%206.69474%20158.614%206.26624%20159.425%205.6497C160.237%205.03323%20160.901%204.24418%20161.37%203.33959C161.411%203.26962%20161.448%203.19765%20161.482%203.12384V3.07695C161.805%202.38215%20162.001%201.63581%20162.064%200.872416C162.08%200.635203%20162.187%200.413106%20162.361%200.251186C162.535%200.0892079%20162.764%20-0.00056984%20163.002%202.72188e-06H163.077C163.219%200.0135152%20163.357%200.0594347%20163.479%200.134211C163.601%200.209045%20163.704%200.310732%20163.781%200.431543C164.456%201.08821%20168.208%204.90617%20168.208%204.90617C168.521%205.24238%20168.498%205.67885%20168.474%206.12046C168.459%206.39352%20168.444%206.66858%20168.508%206.92308C168.679%206.95371%20168.852%206.9769%20169.024%206.99259C169.19%207.00753%20169.356%207.01566%20169.522%207.01687C169.716%207.02093%20169.905%207.0854%20170.061%207.2014C170.217%207.31735%20170.334%207.4791%20170.394%207.66415Z%22%20fill=%22black%22%3E%3C/path%3E%3Cpath%20d=%22M42.9361%2010.7505H48.8648L45.544%2026.5009C44.9343%2029.484%2043.771%2031.1914%2042.0074%2032.4015C40.2236%2033.4366%2038.1753%2033.9258%2036.1163%2033.8086C32.1951%2033.8086%2028.4333%2032.167%2028.0581%2028.1801H34.0243C34.2119%2029.1182%2035.075%2029.6529%2036.3883%2029.6529C38.1613%2029.6529%2038.9774%2028.5835%2039.3433%2026.9043L39.6997%2025.1688H39.5684C39.0449%2025.7443%2038.4099%2026.2073%2037.702%2026.5298C36.994%2026.8523%2036.228%2027.0276%2035.4502%2027.045C31.9981%2027.045%2029.2588%2024.2964%2029.3151%2020.272C29.3902%2015.5816%2032.4483%2010.2533%2037.5797%2010.2533C38.5521%2010.1878%2039.5229%2010.4021%2040.3774%2010.8709C41.2319%2011.3396%2041.9342%2012.0433%2042.4014%2012.8987H42.5046L42.9361%2010.7505ZM37.8423%2022.6454C40.1219%2022.6454%2041.3883%2020.0188%2041.4258%2017.758C41.4258%2016.2477%2040.8348%2014.6998%2039.09%2014.6998C36.7072%2014.6998%2035.4971%2017.3546%2035.4596%2019.6341C35.4596%2021.1726%2036.0506%2022.6454%2037.7954%2022.6454M104.4%2023.152C104.4%2024.1557%20103.536%2024.5591%20102.401%2024.5591C100.525%2024.5591%2099.8967%2023.621%2099.8873%2022.3077H93.9868C93.8836%2027.2045%2098.2551%2028.4146%20102.139%2028.4146C107.101%2028.4146%20110.319%2026.2664%20110.385%2021.9794C110.385%2018.5553%20107.467%2017.5141%20104.597%2016.848C102.392%2016.3415%20101.426%2015.9756%20101.435%2015.1407C101.445%2014.3058%20102.43%2013.9681%20103.396%2013.9681C104.606%2013.9681%20105.431%2014.3996%20105.516%2015.5066H111.248C111.182%2011.4165%20107.495%2010.2158%20103.743%2010.2158C99.1838%2010.2158%2095.6284%2012.2889%2095.5721%2016.2101C95.5721%2019.2964%2097.6547%2020.4315%20100.797%2021.2383C102.814%2021.773%20104.418%2021.9418%20104.4%2023.152ZM148.236%2013.2927H148.133C147.878%2012.3689%20147.314%2011.5602%20146.536%2011.0005C145.758%2010.4409%20144.812%2010.164%20143.855%2010.2158C141.304%2010.2158%20139.747%2011.4822%20138.274%2013.3959H138.171L138.715%2010.7505H132.748L129.174%2027.8424H135.413L137.289%2018.621C137.72%2016.6135%20138.743%2015.2064%20140.291%2015.2064C141.839%2015.2064%20142.045%2016.4446%20141.726%2017.955L139.662%2027.8424H145.9L147.777%2018.621C148.208%2016.4822%20149.231%2015.2064%20150.778%2015.2064C152.326%2015.2064%20152.533%2016.379%20152.214%2017.955L150.15%2027.8424H156.388L158.621%2017.6829C159.559%2013.3959%20158.124%2010.1782%20154.006%2010.1782C152.86%2010.1735%20151.732%2010.4561%20150.724%2011.0002C149.716%2011.5443%20148.861%2012.3325%20148.236%2013.2927ZM1.14441%2027.8424H7.58906L12.5703%203.8743H6.13503L1.14441%2027.8424ZM20.544%2010.2439C24.8967%2010.2439%2029.0525%2012.6266%2028.9868%2018.0206C28.9305%2023.9212%2024.9155%2028.3396%2018.7804%2028.3396C14.559%2028.3396%2010.3377%2025.9944%2010.4127%2020.6285C10.5159%2014.8687%2014.4746%2010.2439%2020.544%2010.2439ZM18.9587%2024.1557C21.7073%2024.1557%2022.711%2020.1688%2022.711%2017.8236C22.711%2016.1445%2022.1951%2014.5028%2020.3845%2014.5028C17.6641%2014.5028%2016.7354%2018.7242%2016.7354%2020.9006C16.7354%2022.6454%2017.2232%2024.1557%2018.9962%2024.1557M14.7185%203.8743L13.7804%208.66792H67.8986L68.8367%203.8743H14.7185ZM58.2457%2010.2439C62.5984%2010.2439%2066.7541%2012.6266%2066.6885%2018.0206C66.6322%2023.9212%2062.6078%2028.3396%2056.4727%2028.3396C52.2513%2028.3396%2048.0299%2025.9944%2048.1144%2020.6285C48.2457%2014.8687%2052.2044%2010.2439%2058.2457%2010.2439ZM56.6885%2024.1557C59.4371%2024.1557%2060.4408%2020.1688%2060.4408%2017.8236C60.4408%2016.1445%2059.9155%2014.5028%2058.105%2014.5028C55.3939%2014.5028%2054.4558%2018.7242%2054.4558%2020.9006C54.4558%2022.6454%2054.9436%2024.1557%2056.726%2024.1557M71.0506%203.8743L70.1125%208.66792H76.3414L77.2795%203.8743H71.0506ZM66.06%2027.8424H72.2982L75.8723%2010.7505H69.5965L66.06%2027.8424ZM85.9661%2028.4146C84.9733%2028.4851%2083.9804%2028.2776%2083.0988%2027.8153C82.2173%2027.353%2081.482%2026.6542%2080.9755%2025.7974H80.8723L78.9962%2034.4465H72.6828L77.7485%2010.7505H83.6772L83.2082%2013.03C83.8273%2012.188%2084.6293%2011.4973%2085.5538%2011.0098C86.4783%2010.5224%2087.5013%2010.2509%2088.5459%2010.2158C92.2982%2010.2158%2094.5027%2013.4334%2094.4371%2017.6173C94.3526%2022.8799%2091.6228%2028.4146%2085.9286%2028.4146H85.9661ZM85.7222%2015.0563C83.3114%2015.0563%2081.8292%2018.1426%2081.7917%2020.516C81.7917%2022.167%2082.3733%2024.0056%2084.3526%2024.0056C86.9324%2024.0056%2087.9924%2020.591%2088.0205%2018.3114C88.0205%2016.7636%2087.5703%2015.0563%2085.7222%2015.0563ZM121.792%2025.1501H121.895L121.351%2027.8612H127.279L130.854%2010.7692H124.625L122.636%2020.3189C122.233%2022.2983%20121.013%2023.3396%20119.475%2023.3396C117.936%2023.3396%20117.598%2021.8949%20117.908%2020.3846L119.925%2010.7692H113.696L111.491%2021.3227C110.553%2025.9193%20112.692%2028.3959%20116.276%2028.3959C117.401%2028.3849%20118.504%2028.0774%20119.472%2027.5042C120.44%2026.931%20121.241%2026.1125%20121.792%2025.1313V25.1501ZM155.253%2034.531L156.191%2029.7373H82.2138L81.2757%2034.531H155.253Z%22%20fill=%22white%22%3E%3C/path%3E%3Cpath%20d=%22M161.96%2015.4409C161.899%2015.4362%20161.839%2015.4193%20161.784%2015.3912C161.728%2015.3632%20161.679%2015.3245%20161.639%2015.2774C161.599%2015.2303%20161.569%2015.1758%20161.55%2015.1169C161.531%2015.058%20161.524%2014.996%20161.529%2014.9343C161.607%2014.0989%20161.508%2013.2563%20161.238%2012.4619C160.968%2011.6675%20160.533%2010.939%20159.961%2010.3244C159.39%209.70976%20158.695%209.22274%20157.923%208.89524C157.15%208.56775%20156.317%208.40717%20155.478%208.42403C155.354%208.42403%20155.235%208.37462%20155.147%208.28665C155.059%208.19869%20155.009%208.07938%20155.009%207.95498C155.009%207.83058%20155.059%207.71129%20155.147%207.62333C155.235%207.53536%20155.354%207.48594%20155.478%207.48594C155.703%207.50048%20155.929%207.50048%20156.154%207.48594C157.82%207.30843%20159.372%206.55564%20160.543%205.35711C161.715%204.15858%20162.431%202.58928%20162.57%200.919337C162.58%200.801554%20162.633%200.691688%20162.72%200.611685C162.807%200.531683%20162.921%200.487447%20163.039%200.487826C163.101%200.492561%20163.161%200.509449%20163.216%200.53751C163.271%200.565571%20163.32%200.604254%20163.36%200.651335C163.401%200.698417%20163.431%200.752963%20163.45%200.811839C163.469%200.870715%20163.476%200.932751%20163.471%200.994386C163.393%201.82905%20163.492%202.6708%20163.761%203.46458C164.031%204.25835%20164.465%204.98628%20165.035%205.60078C165.606%206.21527%20166.299%206.70249%20167.07%207.03058C167.842%207.35867%20168.674%207.52023%20169.512%207.5047C169.636%207.5047%20169.756%207.55413%20169.844%207.64209C169.932%207.73005%20169.981%207.84935%20169.981%207.97375C169.981%208.09815%20169.932%208.21746%20169.844%208.30542C169.756%208.39338%20169.636%208.44279%20169.512%208.44279C167.73%208.47223%20166.021%209.15877%20164.714%2010.3707C163.407%2011.5826%20162.593%2013.2345%20162.43%2015.0094C162.42%2015.1272%20162.367%2015.2371%20162.28%2015.3171C162.193%2015.3971%20162.079%2015.4413%20161.96%2015.4409Z%22%20fill=%22white%22%3E%3C/path%3E%3C/svg%3E",
  (req, res) => {
    res.sendFile(__dirname + "/src/assets/images/logo.svg");
  }
);
