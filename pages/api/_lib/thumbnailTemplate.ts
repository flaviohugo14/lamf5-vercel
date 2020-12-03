interface GetHtmlProps {
    title: string;
    thumbnail_bg?: string;
  }
  
  export function getHtml({
    title,
    thumbnail_bg = '#121212'
  }: GetHtmlProps) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Thumbnail</title>
    
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          font-family: Roboto, sans-serif;
          color: #121214;
          background: #FFFfff;
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.2) 2%, transparent 0%), 
            radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.2) 2%, transparent 0%);
          background-size: 100px 100px;
          height: 100vh;
        }
    
        #wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
    
        svg {
          height: 500px;
          width: 500px;
          margin-top: 80px;
        }
    
        h1 {
          font-size: 62px;
          line-height: 80px;
    
          max-width: 80%;
        }
      </style>
    </head>
    <body>
      <div id="wrapper">
        <h1>${title}</h1>

        <svg version="1.0" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 3000 3000" style="enable-background:new 0 0 3000 3000;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#101010;}
</style>
<g>
	<path class="st0" d="M491.73,1235.93v298.94h-42.36c-67.56,0-126.67-36.09-159.09-90.05l36.3-21.78
		c25.06,41.62,70.66,69.47,122.79,69.47v-256.58H491.73z"/>
	<path class="st0" d="M449.36,1085.51v42.22c-59.88,0-116.76,12.93-167.97,36.13c-89.91,40.78-162.33,113.24-203.08,203.15
		c-20.48,45.11-32.92,94.6-35.56,146.69v201.46H0v-180.27c0-94.07,28.9-181.4,78.31-253.55c31.54-46.06,71.4-85.93,117.47-117.47
		C267.96,1114.41,355.26,1085.51,449.36,1085.51z"/>
	<path class="st0" d="M412.33,1310.28v47.06c-25.99,0-47.06-21.07-47.06-47.06H412.33z"/>
	<line class="st0" x1="449.36" y1="1127.73" x2="449.36" y2="1085.51"/>
	<line class="st0" x1="42.75" y1="1715.15" x2="0" y2="1715.15"/>
	<path class="st0" d="M543.57,1163.86v42.36h-94.21c-1.37,0-2.75,0-4.12,0.04c-53.54,0.63-103.93,14.1-148.38,37.43
		c-104.75,54.91-176.19,164.7-176.19,291.19v180.27h4.34c0.07,0.21,0.21,0.46,0.39,0.67c0.04-0.21,0.07-0.46,0.14-0.67h317.44
		c-16.07-52.02-61.08-91.39-116.24-99.32v-42.72c49.24,5.43,92.69,30.13,122.61,66.4c17.87,21.6,30.91,47.37,37.5,75.63
		c3.17,13.6,4.86,27.77,4.86,42.36H78.31v-222.64c0-7.12,0.21-14.17,0.63-21.18c10.86-193.49,169.98-347.33,365.62-349.76
		c1.59-0.07,3.21-0.07,4.79-0.07H543.57z"/>
	<line class="st0" x1="491.73" y1="1235.93" x2="449.36" y2="1235.93"/>
	<rect y="1793.64" class="st0" width="491.73" height="42.36"/>
	<rect y="1872.13" class="st0" width="491.73" height="42.36"/>
</g>
<g>
	<path class="st0" d="M954.44,1355.54h65.75v230.49h142.44v53.56h-208.2V1355.54z"/>
	<path class="st0" d="M1551.37,1578.73h-131.88l-25.13,60.87h-67.37l126.58-284.05h64.93l127.04,284.05h-68.98L1551.37,1578.73z
		 M1530.66,1528.81l-45.01-108.74l-45.05,108.74H1530.66z"/>
	<path class="st0" d="M2095.91,1639.59l-0.41-170.43l-83.6,140.41h-29.61l-83.19-136.75v166.77h-61.7v-284.05h54.41l106.29,176.52
		l104.68-176.52h54l0.79,284.05H2095.91z"/>
	<path class="st0" d="M2453.01,1408.29v75.07h131.47v52.75h-131.47v103.48h-65.75v-284.05h214.66v52.75H2453.01z"/>
	<path class="st0" d="M2971.39,1486.2c19.09,15.96,28.61,37.35,28.61,64.12c0,17.31-4.31,33.06-12.96,47.27
		c-8.65,14.2-21.86,25.57-39.59,34.1c-17.72,8.51-39.54,12.77-65.51,12.77c-20.04,0-39.71-2.63-59.05-7.91
		c-19.34-5.28-35.78-12.77-49.32-22.53l25.96-50.31c10.81,8.12,23.27,14.41,37.35,18.86c14.04,4.47,28.53,6.71,43.39,6.71
		c16.52,0,29.48-3.25,38.96-9.75c9.48-6.48,14.2-15.55,14.2-27.18c0-12.17-4.93-21.37-14.82-27.6c-9.85-6.21-26.96-9.32-51.3-9.32
		h-72.63l14.58-159.89h173.29v52.75h-118.51l-4.43,53.97h23.11C2922.78,1462.27,2952.34,1470.26,2971.39,1486.2z"/>
</g>
</svg>
      </div>
    </body>
    </html>`
  }