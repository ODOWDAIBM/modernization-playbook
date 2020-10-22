(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{ko2T:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return A})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r,A=function(){return Object(n.b)("span",null,"Modernizing operations using traditional WAS ",Object(n.b)("br",null)," ",Object(n.b)("h2",null,"Build"))},s={},c=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),p={Title:A,_frontmatter:s},l=o.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(l,i({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"This section covers how to containerize an existing application running on traditional WebSphere Application Server. ")),Object(n.b)("p",null,"The final versions of the files created in this section can be found in the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was90"}),"was90")," branch of this repo"),Object(n.b)("h2",null,"Summary:"),Object(n.b)("p",null,"This section has the following steps:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"tWAS-build.md#test-the-image"}),"Test the application locally")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"tWAS-build.md#modifying-configuration-without-rebuilding-container"}),"Using environment variables in properties files to allow configuration to be injected in to the runtime environment dynamically.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"tWAS-build.md#advanced--put-your-passwords-in-secrets"}),"Advanced: put your passwords in secrets."))),Object(n.b)("h2",null,"Build a container"),Object(n.b)("p",null,"IBM Cloud Transformation Advisor will provide an initial set of files to simplify creating a container for the application.  Transformation Advisor creates a ",Object(n.b)("strong",{parentName:"p"},"migration bundle")," that will have a Dockerfile, WAS configuration scripts and Kubernetes deployment resources."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start by clicking on CustomerOrderServices.ear in IBM Cloud Transformation Advisor.",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.694444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAC4jAAAuIwF4pT92AAABB0lEQVQY003PS07DMBAG4JwNBCoNcTaItDwW7NhESCygd2BTcgTOBkJA4iSN307yMzYFYenTzNiasSYpVmtcXl2jKNYoVhcxpqcMJ8sUx4slDo4W0SHJsgx5noMxBkYxZ1SzJUn/JMZ6dIMmNtoJi154CD2CU/3aKLyRd67R7wZ0XUd60qLtFRoBNMMe5YkxGpw3aFuOlvN9bFB/fcI5i/+nqiqUZYmHxw3u725xs3nB2TNwvp3AnuYo8d5Daw1rHcZxjMJdoJSKb45y535qIQSRGIYBQmpo+lMoT1s5CDMhCQ91XUNKGRt+hUGxiQaEPDDGwFkLqSw+ao15mqC9gjWKck87zPgGKbRREC7g3tQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Customer Order Services application",title:"Customer Order Services application",src:"/modernization-playbook/static/1e2dde73a9f68b23319c3c8b08be63a8/3cbba/customerorderservices.png",srcSet:["/modernization-playbook/static/1e2dde73a9f68b23319c3c8b08be63a8/7fc1e/customerorderservices.png 288w","/modernization-playbook/static/1e2dde73a9f68b23319c3c8b08be63a8/a5df1/customerorderservices.png 576w","/modernization-playbook/static/1e2dde73a9f68b23319c3c8b08be63a8/3cbba/customerorderservices.png 1152w","/modernization-playbook/static/1e2dde73a9f68b23319c3c8b08be63a8/0b124/customerorderservices.png 1728w","/modernization-playbook/static/1e2dde73a9f68b23319c3c8b08be63a8/4ea69/customerorderservices.png 2304w","/modernization-playbook/static/1e2dde73a9f68b23319c3c8b08be63a8/35b35/customerorderservices.png 2308w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"View Migration Plan")," to begin process of creating the files needed to containerize the application.\n",Object(n.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAAB20lEQVQ4y3VSW27iQBD08cD2/m5IPjgRUvYeyVn4RELGiJd52GBsbPw2tVMNg5xk11Kpe2Y8NdXVbQxe3zAcDvEyeBP8fhnAsn+h17fQN230+yZ6vR4sy4Jt209wbZrmjz0jumRIkhRhlCGMC6RZhSRrBGne4poV6jxBWVao6xpVdY9FUSCOY6RpijzPcb1e0TQNDM/bYDKZwJ05WC0XOAYBAt9HEPjwD3v4/kEhwOl0wuVyeSJRROfzWfIsy4SYDxmBIlgul1itVoLtdovdbifQOeN+vxelQqYi1fERKi3LUlQKIX+eTqeYzWaYz+c4HA5ymVHnvlKsiXSkOu6HYSgK9Wfwguu68DwPVPudTINqSJQk95KpjH5SHb273W4CKXmz2QgZX9JgCd01Tb8T3lWS5PsnhMfjEev1WvyjSiqjb+uHn12VURQ9CemXJunCoA+O44iHVMq1R18dF6u1J13WFvyP8ItClsPD7kHTAkkB5JV6tW3RPsCy9dj8S6E0pUvIS4xVzcGukZe18qqWc4Kz1u12qBoVx9HTWzZIusxxYeQosJschbNC+AD3dLmarFWCfrZFKeTPbAK9Y84mETpn9wlNyIHmBHx8fGI0GuH9/Q/G4zEWi4WM31+9trhsI0bA7QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Migration Plan",title:"Migration Plan",src:"/modernization-playbook/static/9bbdc482bff341ef0b33195b0431f976/3cbba/migrationplan.png",srcSet:["/modernization-playbook/static/9bbdc482bff341ef0b33195b0431f976/7fc1e/migrationplan.png 288w","/modernization-playbook/static/9bbdc482bff341ef0b33195b0431f976/a5df1/migrationplan.png 576w","/modernization-playbook/static/9bbdc482bff341ef0b33195b0431f976/3cbba/migrationplan.png 1152w","/modernization-playbook/static/9bbdc482bff341ef0b33195b0431f976/0b124/migrationplan.png 1728w","/modernization-playbook/static/9bbdc482bff341ef0b33195b0431f976/4ea69/migrationplan.png 2304w","/modernization-playbook/static/9bbdc482bff341ef0b33195b0431f976/6a25e/migrationplan.png 2316w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Verify Manual Upload is selected.  Optionally we could provide the application binary and drivers but we will leave them blank and update the generated files later to provide the information.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select Download to generate a zip file of the assets needed to build a container for the application.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Review the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was90/migration-bundle/customerorderservicesapp_migrationBundle.zip"}),"migration bundle")," generated for this application.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was90/migration-bundle/READ_THIS_FIRST.md"}),"READ_THIS_FIRST.md")," gives important information on how to use the bundle.\nWe will follow the steps listed below.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The DB2 drivers are added to the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was90/migration-bundle/lib"}),"lib")," directory.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was90/CustomerOrderServicesApp-0.1.0-SNAPSHOT.ear"}),"application ear")," is added.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was855/migration-bundle/Dockerfile"}),"Dockerfile")," is updated to include the name of the ear file"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"COPY --chown=was:root CustomerOrderServicesApp-0.1.0-SNAPSHOT.ear /work/config/CustomerOrderServicesApp-0.1.0-SNAPSHOT.ear\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was855/migration-bundle/src/config/install_app.py"}),"server_config.py")," is updated to include the name of the application ear file."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),'app = AdminApp.install("/work/config/CustomerOrderServicesApp-0.1.0-SNAPSHOT.ear", [parms])\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Build the container image using docker build command.\nThe code is in the was90 branch.  Clone the branch to copy the files to your system"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),'```\ngit clone --branch was90 https://github.com/ibm-cloud-architecture/cloudpak-for-applications.git\ncd cloudpak-for-applications\ndocker build --tag customer-order-app .\nSending build context to Docker daemon  23.11MB\nStep 1/5 : FROM ibmcom/websphere-traditional:latest-ubi\n ---\x3e fd0ada1243f0\nStep 2/5 : COPY --chown=was:root CustomerOrderServicesApp-0.1.0-SNAPSHOT.ear /work/config/CustomerOrderServicesApp-0.1.0-SNAPSHOT.ear\n ---\x3e 1960bcb9ce1b\nStep 3/5 : COPY --chown=was:root ./src/config /work/config\n ---\x3e f507eb4297c9\nStep 4/5 : COPY --chown=was:root ./lib /work/config/lib\n ---\x3e 408dfe7dc1c2\nStep 5/5 : RUN /work/configure.sh\n ---\x3e Running in 8b8cf71da2c9\nSetting Password\nStarting server ...................\nADMU0116I: Tool information is being logged in file\n           /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/logs/server1/startServer.log\nADMU0128I: Starting tool with the AppSrv01 profile\nADMU3100I: Reading configuration for server: server1\nADMU3200I: Server launched. Waiting for initialization status.\nADMU3000I: Server server1 open for e-business; process id is 466\nApplying configuration\n+ Found config-files under /work/config. Executing...\nWASX7209I: Connected to process "server1" on node DefaultNode01 using SOAP connector;  The type of process is: UnManagedProcess\nInstalling application ...\nADMA5016I: Installation of customerorderservicesapp started.\nADMA5058I: Application and module versions are validated with versions of deployment targets.\nADMA5005I: The application customerorderservicesapp is configured in the WebSphere Application Server repository.\nADMA5005I: The application customerorderservicesapp is configured in the WebSphere Application Server repository.\nADMA5081I: The bootstrap address for client module is configured in the WebSphere Application Server repository.\nADMA5053I: The library references for the installed optional package are created.\nADMA5005I: The application customerorderservicesapp is configured in the WebSphere Application Server repository.\nADMA5001I: The application binaries are saved in /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/wstemp/Script1753253ef80/workspace/cells/DefaultCell01/applications/customerorderservicesapp.ear/customerorderservicesapp.ear\nADMA5005I: The application customerorderservicesapp is configured in the WebSphere Application Server repository.\nSECJ0400I: Successfully updated the application customerorderservicesapp with the appContextIDForSecurity information.\nADMA5005I: The application customerorderservicesapp is configured in the WebSphere Application Server repository.\nADMA5005I: The application customerorderservicesapp is configured in the WebSphere Application Server repository.\nADMA5113I: Activation plan created successfully.\nADMA5011I: The cleanup of the temp directory for application customerorderservicesapp is complete.\nADMA5013I: Application customerorderservicesapp installed successfully.\nWASX7209I: Connected to process "server1" on node DefaultNode01 using SOAP connector;  The type of process is: UnManagedProcess\nStarting Creating JVM Properties\nStarting Creating Authentication Alias\nStarting Creating Queues\nStarting Creating Topics\nStarting Creating Activation Specifications\nStarting Creating Connection Factories\nStarting Creating JDBC Providers\nStarting Creating Variables\nStarting Saving Configuration Changes Before Application Deployment\nStarting Application Deployment\nStopping server ...................\nRemoving intermediate container 8b8cf71da2c9\n ---\x3e dfa50aba03f5\nSuccessfully built dfa50aba03f5\nSuccessfully tagged customer-order-app:latest\n````\n')))),Object(n.b)("p",null,"Validate that image is in the repository using the images command (you should also see original websphere-traditional image):"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$docker images\nREPOSITORY                                  TAG                 IMAGE ID            CREATED             SIZE\ncustomer-order-app                          latest              f8d3eafdd30a        3 days ago          1.85GB\nibmcom/websphere-traditional                9.0.0.11            2985c9be759f        10 days ago         1.78GB\n\n")),Object(n.b)("h2",null,"Test the image"),Object(n.b)("p",null,"To test the image locally you are also going to need a database to connect to locally.  We aren’t going to go into this much.  Since we want the DB2 and tWAS containers to be able to talk to each other we create a network they can share"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$docker network create customer-order\n")),Object(n.b)("p",null,"Now we start DB2.  This DB2 contains scripts to populate the database with sample data for our application on startup."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$docker run -d --network customer-order --privileged=true -e LICENSE=accept -e DB2INST1_PASSWORD=db2inst1 -e DBNAME=orderdb --name db2-customer-order vandepol/db2-cos\n")),Object(n.b)("p",null,"This take a while to start up since it creates the database from scratch."),Object(n.b)("p",null,"to access this database from the tWAS container, we use the hostname = container name.  In this case the hostname would be ",Object(n.b)("inlineCode",{parentName:"p"},"db2-customer-order")),Object(n.b)("p",null,"You are going to test the image in local Docker engine. Issue the following command to start the container:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"$docker run -d --network customer-order --name twas-customer-order -p 9443:9443 -p 9043:9043 customer-order-app:latest\n")),Object(n.b)("p",null,"Check if container started successfully using command:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),'$docker logs -f 9ee253a59956869c6\nWASX7303I: The following options are passed to the scripting environment and are available as arguments that are stored in the argv variable: "[/work/config-ibm/webContainer.props]"\nStarting server ...................\nADMU3000I: Server server1 open for e-business; process id is 494\nHPEL is enabled\nrun logViewer.sh\n')),Object(n.b)("p",null,"Right now the problem we have is that the database hostname in the scripts we used to configure the application doesn’t match the hostname of the db2 docker container we started.  That leads us to our next section on modifying the configuration without rebuilding the container.  We could simply modify the jython scripts and change the hostname of the databases to ",Object(n.b)("inlineCode",{parentName:"p"},"db2-customer-order"),", however we’re going to do it using configuration files."),Object(n.b)("h2",null,"Modifying Configuration without rebuilding container"),Object(n.b)("p",null,"When building the traditional WebSphere container there may be configuration you will want to add or change between environments.  You don’t want to have to rebuild your container just because a database hostname changed, or for password changes."),Object(n.b)("p",null,"To solve this problem, you can load configuration changes at server start-up using properties files. In this section we’ll\nshow how to extract the configuration into properties files.  In the Deploy ",Object(n.b)("a",i({parentName:"p"},{href:"tWAS-deploy.md"}),"section")," we’ll describe how to\ncreate the configMaps and load them at server start-up when deploying using the cloudpak."),Object(n.b)("p",null,"We have pre-extracted configuration files in the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/blob/was90/runtimeConfig"}),"runtimeConfig")," folder, however if you want to extract your own you can follow the steps below.  "),Object(n.b)("p",null,"We start with a server environment setup and running with the resources defined as you desire. We can use the docker container we created above.  We can run this locally.   "),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"docker run -d --rm --name twas-customer-order -p 9443:9443 -p 9043:9043 -p9080:9080 -v /myconfigs/:/etc/websphere/  customer-order-app:latest"),"  "),Object(n.b)("p",null,"Here we expose port ",Object(n.b)("inlineCode",{parentName:"p"},"9043")," for the WebSphere admin console.  We also mount a volume so that we can extract the properties files we’re generating locally."),Object(n.b)("p",null,"Next, we ssh into the container to execute commands to extract the configuration.  To enter the shell script of our container locally we run the command:  "),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"docker exec -it twas-customer-order bash")),Object(n.b)("p",null,"Once in the container shell, we execute the following commands"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"/opt/IBM/WebSphere/AppServer/bin/wsadmin.sh -lang jython"),"  "),Object(n.b)("p",null,"you will be prompted for your credentials.  Use the credentials you would use in the Admin Console.\nin our example we have:",Object(n.b)("inlineCode",{parentName:"p"},"wasadmin/passw0rd")),Object(n.b)("p",null,"Run the following command to extract the Datasource configuration and the Password information:  "),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"AdminTask.extractConfigProperties('[-propertiesFileName /etc/websphere/Datasource.inds.props -configData DataSource=INDS -options [[PortablePropertiesFile true]]]')\nAdminTask.extractConfigProperties('[-propertiesFileName /etc/websphere/Datasource.orderds.props -configData DataSource=OrderDS -options [[PortablePropertiesFile true]]]')\nAdminTask.extractConfigProperties('[-propertiesFileName /etc/websphere/JAASAuth.db2password.props -configData Security= -filterMechanism SELECTED_SUBTYPES -selectedSubTypes [JAASAuthData] -options [[PortablePropertiesFile true]]]')\n")),Object(n.b)("p",null,"The syntax for these commands can get complicated.  Documentation available ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS7K4U_9.0.5/com.ibm.websphere.zseries.doc/ae/txml_7extractprops.html?origURL=SS7K4U_9.0.0/com.ibm.websphere.zseries.doc/ae/txml_7extractprops.html"}),"here")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Sample Configuration Files"),"  "),Object(n.b)("p",null,Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/blob/was90/tWAS/runtimeConfigs/Datasource.inds.props"}),"Datasource.inds.props"),Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/blob/was90/tWAS/runtimeConfigs/Datasource.orderds.props"}),"Datasource.orderds.props"),Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/blob/was90/tWAS/runtimeConfigs/JAASAuth.db2password.props"}),"JAASAuth.db2password.props")),Object(n.b)("p",null,"If we want to change something in this configuration, we can make a change to these properties files.\nTo apply this to the container we can do this at container ",Object(n.b)("strong",{parentName:"p"},"build")," time by copying the properties file into\nthe ",Object(n.b)("inlineCode",{parentName:"p"},"/work/config")," folder as described in the ",Object(n.b)("a",i({parentName:"p"},{href:"#modify-artifacts"}),"Modifying Artifact section"),".  "),Object(n.b)("p",null,"However, if you want to modify these at ",Object(n.b)("strong",{parentName:"p"},"deploy")," time without rebuilding the docker container (ideal for passwords and database hostnames which change between environments), you can do a volume mount to\n",Object(n.b)("inlineCode",{parentName:"p"},"/etc/websphere"),", and these will be applied at server start-up.  "),Object(n.b)("p",null,"Let’s try this!  "),Object(n.b)("p",null,"Open the properties files, ",Object(n.b)("inlineCode",{parentName:"p"},"Datasource.inds.props")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Datasource.orderds.props"),".  Here let’s change the server name of the database we’re accessing to the name of our local db2 container we start above.   "),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"serverName=db2-customer-order #String\n")),Object(n.b)("p",null,"If our container is still running from before we want to stop it so that we can restart it and allow for the new properties to be loaded.",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("inlineCode",{parentName:"p"},"docker stop twas-customer-order")),Object(n.b)("p",null,"Restart the docker container and map the properties files again. Remember to connect to the same network of the db2 container we started above"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"docker run -d --rm --name twas-customer-order --network customer-order -p 9443:9443 -p 9043:9043 -p 9080:9080 -v /runtimeConfigs/:/etc/websphere/ customer-order-app:guide")),Object(n.b)("p",null,"We can look at the logs to see if the properties files are loaded.\n",Object(n.b)("strong",{parentName:"p"},"TIP"),": the properties files MUST end in .props.  it will not detect different file types in the /etc/websphere folder at server start-up."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),'$ docker logs twas-customer-order -f\nENABLE_BASIC_LOGGING is\nConfigure logging mode\nWASX7357I: By request, this scripting client is not connected to any server process. Certain configuration and application operations will be available in local mode.\n+ Found config-files under /etc/websphere. Executing...\nWASX7357I: By request, this scripting client is not connected to any server process. Certain configuration and application operations will be available in local mode.\nWASX7303I: The following options are passed to the scripting environment and are available as arguments that are stored in the argv variable: "[/etc/websphere/Datasource.inds.props]"\nWASX7357I: By request, this scripting client is not connected to any server process. Certain configuration and application operations will be available in local mode.\nWASX7303I: The following options are passed to the scripting environment and are available as arguments that are stored in the argv variable: "[/etc/websphere/Datasource.orderds.props]"\nWASX7357I: By request, this scripting client is not connected to any server process. Certain configuration and application operations will be available in local mode.\nWASX7303I: The following options are passed to the scripting environment and are available as arguments that are stored in the argv variable: "[/etc/websphere/JAASAuth.db2password.props]"\nWASX7357I: By request, this scripting client is not connected to any server process. Certain configuration and application operations will be available in local mode.\n')),Object(n.b)("p",null,"How we can log into the admin console to see our changes.  "),Object(n.b)("h2",null,"Verify the application"),Object(n.b)("p",null,"After the server is successfully started, you can connect to it using browser. Use http://localhost:9043/ibm/console to access admin console of the server running in the container. Login using your original credentials, that where migrated."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1006px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHsRqpik//EABcQAQEBAQAAAAAAAAAAAAAAAAEAERD/2gAIAQEAAQUCsWxOt//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAQEBAAAAAAAAAAAAAAAAAAAxIP/aAAgBAQAGPwJVx//EABsQAQACAgMAAAAAAAAAAAAAAAEAESExEEFR/9oACAEBAAE/IcuLnSRNBbDct94f/9oADAMBAAIAAwAAABBzH//EABcRAAMBAAAAAAAAAAAAAAAAAAABITH/2gAIAQMBAT8QV0Z//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAgEBPxB0eRf/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMVFBYZH/2gAIAQEAAT8QHIi+oGLb3jHWF22cEe59iVLfE//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Console login",title:"Console login",src:"/modernization-playbook/static/cafe6e8d2e8827e4cff932b8c8f2b7e5/615ae/12-console.jpg",srcSet:["/modernization-playbook/static/cafe6e8d2e8827e4cff932b8c8f2b7e5/69549/12-console.jpg 288w","/modernization-playbook/static/cafe6e8d2e8827e4cff932b8c8f2b7e5/473e3/12-console.jpg 576w","/modernization-playbook/static/cafe6e8d2e8827e4cff932b8c8f2b7e5/615ae/12-console.jpg 1006w"],sizes:"(max-width: 1006px) 100vw, 1006px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Also validate that application has successfully started"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1149px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAdkWUH//xAAXEAADAQAAAAAAAAAAAAAAAAAAAREx/9oACAEBAAEFAtUIf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABoQAAEFAQAAAAAAAAAAAAAAAAABEUFhkXH/2gAIAQEAAT8hgH1gnGH/2gAMAwEAAgADAAAAEAff/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QV//EABsQAAEEAwAAAAAAAAAAAAAAAAEAESGRMUFh/9oACAEBAAE/EAXA3h5XShEAk0L/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Application",title:"Application",src:"/modernization-playbook/static/88c6407f847a4330402f4a3ea873c36f/39024/13-app.jpg",srcSet:["/modernization-playbook/static/88c6407f847a4330402f4a3ea873c36f/69549/13-app.jpg 288w","/modernization-playbook/static/88c6407f847a4330402f4a3ea873c36f/473e3/13-app.jpg 576w","/modernization-playbook/static/88c6407f847a4330402f4a3ea873c36f/39024/13-app.jpg 1149w"],sizes:"(max-width: 1149px) 100vw, 1149px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"And the Datasources were also migrated"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHbFsFJD//EABgQAQEAAwAAAAAAAAAAAAAAAAABAhAR/9oACAEBAAEFAnIjHUf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAaEAACAgMAAAAAAAAAAAAAAAABEBEhADGB/9oACAEBAAE/IYq0CI62mf/aAAwDAQACAAMAAAAQe8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAHxAAAgECBwAAAAAAAAAAAAAAAAFBECERMVFxgZGx/9oACAEBAAE/EErmTFoLoxCyd0EOaZm79P/Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Datasources",title:"Datasources",src:"/modernization-playbook/static/534a1556a9ad65a5c67aac791ef3da33/2e753/14-datasources.jpg",srcSet:["/modernization-playbook/static/534a1556a9ad65a5c67aac791ef3da33/69549/14-datasources.jpg 288w","/modernization-playbook/static/534a1556a9ad65a5c67aac791ef3da33/473e3/14-datasources.jpg 576w","/modernization-playbook/static/534a1556a9ad65a5c67aac791ef3da33/2e753/14-datasources.jpg 1152w","/modernization-playbook/static/534a1556a9ad65a5c67aac791ef3da33/73925/14-datasources.jpg 1157w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Finally open the application https://localhost:9443/CustomerOrderServicesWeb use ",Object(n.b)("inlineCode",{parentName:"p"},"rbarcia/bl0wfish")," for username and password if prompted."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"903px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG5xYnj5oP/xAAbEAABBAMAAAAAAAAAAAAAAAAAAQIDEQQQNP/aAAgBAQABBQKiJySsrWDzH//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAAIBBQAAAAAAAAAAAAAAAAABEBESMWFx/9oACAEBAAY/Ai5N02Zhdcf/xAAcEAACAQUBAAAAAAAAAAAAAAAAATEQESFRcfD/2gAIAQEAAT8hyhtcFy+h0FB4m6f/2gAMAwEAAgADAAAAEFDP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Qh//EABsQAQACAgMAAAAAAAAAAAAAAAEAESExwdHw/9oACAEBAAE/EF5CVnCXkggAEpqLvlOptgPBtDU//9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Application page",title:"Application page",src:"/modernization-playbook/static/0d73328ef0060df8c82979d0b4a64223/1e7e8/15-running.jpg",srcSet:["/modernization-playbook/static/0d73328ef0060df8c82979d0b4a64223/69549/15-running.jpg 288w","/modernization-playbook/static/0d73328ef0060df8c82979d0b4a64223/473e3/15-running.jpg 576w","/modernization-playbook/static/0d73328ef0060df8c82979d0b4a64223/1e7e8/15-running.jpg 903w"],sizes:"(max-width: 903px) 100vw, 903px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"You have successfully migrated application to the traditional WebSphere Application Server container. Good job!")),Object(n.b)("h2",null,"Advanced:  Put your passwords in Secrets!"),Object(n.b)("p",null,"One issue with the above scenario is that the contents of the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.ibm.com/CASE/cloudpak-for-applications/blob/was90/tWAS/runtimeConfigs/JAASAuth.db2password.props"}),"JAASAuth.db2password.props")," is in plain text (or XOR encrypted…which isn’t hard to crack).  Typically, we wouldn’t want to store this in a properties file, which would then be stored as a configmap in Kubernetes.  We’d want to use secrets.  The way secrets work is that the properties loaded into the secret are loaded as environment variables at container start-up.  Ideally, we would want to replace values in the properties files we’ve loaded above with environment variables, this is currently not supported in the cloudpak (Feature request made to development); however, we have a work around to load these values ourselves."),Object(n.b)("p",null,"First, we would replace a value with reference to an environment variable.\nLet’s use that the port number as an example again."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"syncQueryTimeoutWithTransactionTimeout= #boolean\nfreeResourcesOnClose=false #String\ntraceFileCount=null\n**portNumber=!{inds.port.number} #integer**\nstripTrailingZerosForDecimalNumbers=null\ntranslateForBitData=null\nwebSphereDefaultQueryTimeout= #integer\nclientApplicationInformation= #String\n")),Object(n.b)("p",null,"Here we have assigned the ",Object(n.b)("inlineCode",{parentName:"p"},"portNumber")," to the environment variable ",Object(n.b)("inlineCode",{parentName:"p"},"inds.port.number"),".  "),Object(n.b)("p",null,"We have created a simple script to run prior to server startup which will replace all references to environment variables with the environment variable values.  "),Object(n.b)("p",null,"The script we created is available ",Object(n.b)("a",i({parentName:"p"},{href:"tWAS/envsubst.sh"}),"here")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"#!/bin/sh\n\nmkdir /etc/websphere/orig\ncp /etc/websphere/*.props /etc/websphere/orig/\nfor f in $(find /etc/websphere/orig/ -regex '.*\\.props');\ndo\n  envsubst < $f > \"/etc/websphere/$(basename $f)\";\ndone\n")),Object(n.b)("p",null,"One issue is that we need to install ",Object(n.b)("inlineCode",{parentName:"p"},"envsubst")," into the container, which is included inside the gettext package.  We have to run apt-get install to install this.  Next we need to copy our script into the container, and lastly we need to modify the startup command to run this command prior to server start-up.  Here is our solution to this:  "),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),'RUN apt-get update && apt-get install -y gettext\nCOPY --chown=was:0 envsubst-cmd.sh /work/\nCMD ["sh", "-c", "/work/envsubst-cmd.sh && /work/start_server.sh"]\n')),Object(n.b)("p",null,"Now we should be able to start up the container and pass a new value as an environment variable to change the port number."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"docker run -d --rm --name customer-order-app -p9443:9443 -p 9043:9043 -v /myconfigs/:/etc/websphere/ -e inds.port.number=50002 customer-order-app:latest")),Object(n.b)("p",null,"To specify environment variable in the properties file you can replace the value with ",Object(n.b)("inlineCode",{parentName:"p"},"${inds.port.number}")),Object(n.b)("h2",null,"Conclusion"),Object(n.b)("p",null,"In conclusion, we’ve taken our estisting traditional WebSphere application.  We’ve loaded the container with the server and application configuration.  We’ve installed the application, and modified the configuration if required.  This sets us up for integrating all of this into a CI/CD pipeline and then deploying this to Kubernetes."),Object(n.b)("p",null,"We’re on our way to the cloud!"))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-applications-was-90-t-was-build-mdx-0de692dd8bb68e1d62ac.js.map