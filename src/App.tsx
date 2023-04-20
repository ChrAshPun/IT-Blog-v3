import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import styles from './App.module.scss';
import Nav from './components/Nav';
import Header from './components/Header';
import Article from './components/Article';

interface IArticle {
  category: string;
  title: string;
  instructions: IInstructions[];
  notes?: string[];
}

interface IInstructions {
  objective: string;
  description: string;
  list: string[];
  imgSrc?: string;
  imgAlt?: string;
}

function App() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<IArticle[]>([]);

  const handleHeader = () => {
    setSearch("");
    setCategory("");
  }
  
  const handleNavigation = (category: string) => {
    setSearch("");
    setCategory(category);
  }

  const handleSearch = (search: string) => {
    setCategory("");
    setSearch(search);
  }

  useEffect(() => {
    // simulate API call
    const articles: IArticle[] = [
    {
      category: 'Operating Systems',
      title: "My drives are missing on Windows Explorer",
      instructions: [{        
        objective: "Change the Windows Explorer target path",
        description: "If you are using Windows 7 and Windows Explorer is not showing all of your folders and drives, you may need to fix the target path.",
        list: ["Open the Windows Explorer Properties",
        "Select the Shortcut tab",
        "Set the Target path to: %windir%explorer.exe"],
        imgSrc: require('./png/winexplorertarget.png'),
        imgAlt: 'winexplorertarget.png',
      }],
    },
    {
      category: "Operating Systems",
      title: 'How can I set File Explorer to open to "This PC" instead of "Quick Access?"',
      instructions: [{   
        objective: "Edit Folder Options",
        description: "Open File Explorer and edit the General settings",
        list: [
          "Open File Explorer",
          "Select File at the top left",
          "Select Change folder and search options",
          "Set Open File Explorer to: This PC",
        ],
        imgSrc: require('./png/fileexplorerthispc.png'),
        imgAlt: "fileexplorerthispc.png",
      }],
    },
    {
      category: "Operating Systems",
      title: 'Error: \"You can\'t connect to the file share because it\'s not secure."',
      instructions: [{   
        objective: "Enable SMBv1",
        description:
        "SMBv1 is an old and insecure network file sharing protocol that is disabled on Windows 10 by default.",
        list: [
          "Open Control Panel",
          "select Programs and Features",
          "Check SMB 1.0 / CIFS File Sharing Support",
        ],
        imgSrc: require('./png/smb1error.png'),
        imgAlt: "smb1error",
      }],
    },
    {
      category: "Operating Systems",
      title: '"I need access to a network drive"',
      instructions: [
        {
          objective: "Step 1. Set the Security permissions",
          description: "If a user needs access to a specific folder, you may need to configure the Security Properties to give the user access to the contents in that folder before mapping the network drive.",
          list: [
            "Right - click the folder the user needs access to",
            "Select Properties and go to the Security tab",
            "click Edit...and add the user / group",
            "Check all appropriate Allow checkboxes to grant the user / group access to the folder",
          ],
        },
        {
          objective: "Step 2. Map the network drive using File Explorer",
          description: "After configuring the Security permissions, manually map the network drive on the user's computer.",
          list: [
            "Open File Explorer",
            "right - click This PC and select Map network drive…",
            "In the Folder box type the folder path like this: \\servershare",
          ],
          imgSrc: require('./png/mapdrives.png'),
          imgAlt: "mapdrives",
        }
      ],
      notes: [
        "Make sure you can ping the server",
        "Use the IP address of the server if the hostname isn't working",
      ],
    },
    // PRINTERS articles
    {
      category: "Printers",
      title: "How to add a Printer by IP Address",
      instructions: [
        {
          objective: "Step 1. Add the printer from the Control Panel",
          description: "Before you can add the printer to the client's desktop, make sure you know the IPv4 address of the printer or print a configuration page. If you are helping the client remotely, assist them on how to print a configuration page from the printer.",
          list: [
            "Open Control Panel and select Devices and Printers",
            "click Add a printer",
            'select "The printer that I want isn’t listed"',
            "select Add a printer using a TCP / IP address or hostname",
            "Enter the IPv4 address and select the correct driver on the next page",
          ],
        },
        {
          objective: "Step 2. Print a test page",
          description: "It's best practice to make sure the printer is printing correctly before ending your session with the client.",
          list: [
            "Open Control Panel and select Devices and Printers",
            "Right - click the printer and select Printer Properties",
            "Select Print Test Page",
          ],
          imgSrc: require('./png/printbyip.png'),
          imgAlt: "printbyip.png",
        },
      ],
    },
    {
      category: "Printers",
      title: "My printer is randomly printing pages",
      instructions: [{
        objective: "Clear the Print Spooler",
        description:
        "If a printer is randomly printing pages on it's own, try clearing the Print Spooler.",
        list: [
          "Press Winkey + r and type services.msc",
          "right - click Print Spooler select Stop",
          "Next, navigate to C: \\Windows\\System32\\spool\\PRINTERS",
          "Delete all the files in that folder and restart the Print Spooler",
        ],
        imgSrc: require('./png/clearspooler.png'),
        imgAlt: "clearspooler.png",
      }],
    },
    {
      category: "Printers",
      title: "My printer is printing a crazy symbols!",
      instructions: [{ 
        objective: "Install the latest driver",
        description:
        "If a printer is printing hieroglyphics it's usually a driver issue. Go to the manufacturer's website to install the latest driver. Every installation process is different. If you've installed the latest driver and the printer is still not printing correctly, make sure the printer is using the latest driver from the Control Panel.",
        list: [
          "Open Control Panel and select Devices and Printers",
          "Right - click the printer and select Printer Properties",
          "Click the Advanced tab",
          "click on the Driver drop - down list and select the latest driver",
        ],
        imgSrc: require('./png/hieroglyphics.png'),
        imgAlt: "hieroglyphics",
      }],
    },
    // OUTLOOK articles
    {
      category: "Outlook",
      title: 'Error: "The set of folders cannot be opened."',
      instructions: [{ 
        objective: "Delete the .ost file and recreate the Outlook profile",
        description:
        "If a client cannot open their Outlook because of this prompt, try deleting corrupt .ost file and recreating their Outlook Profile",
        list: [
          "Go to C: \\Users\\username\\AppData\\Local\\Microsoft\\Outlook",
          "Delete the corrupt.ost file",
          "Right - click the printer and select Printer Properties",
          "Open Control Panel and select Mail",
          "Click Add...to create a new profile",
        ],
        imgSrc: require('./png/setoffolders.png'),
        imgAlt: "setoffolders.png",
      }],
    },
    {
      category: "Outlook",
      title: 'Error: "Library not registered."',
      instructions: [{ 
        objective: "Make changes to the Windows Registry",
        description:
        "This error usually occurs after a upgrade. There may be an older key in the Windows Registry that needs to be deleted. Backup the key by saving it as an Export before making any changes to the Registry. ",
        list: [
          "Press Start, type regedit and click on Registry Editor",
          "Nagivate to HKEY_CLASSES_ROOT\\Typelib\\0006F062 - 0000 - 0000 - C00 - 000000000046",
          "Backup the folder before deleting it",
          "Now try to open Outlook",
          "If that doesn't work, try running an Office repair",
        ],
        imgSrc: require('./png/librarynotregistered.png'),
        imgAlt: "librarynotregistered",
      }],
    },
    {
      category: "Outlook",
      title: 'Error: "Instant Search is not available when Outlook is running with administrator permissions."',
      instructions: [{ 
        objective: "Uncheck “Run As Administrator” for Outlook.exe",
        description:
        "If Outlook Instant Search is not working properly, trying reconfiguring the Compatibility settings for Outlook.",
        list: [
          "For 32 - bit Windows go to C: \\Program Files\\Microsoft Office\\Office14\\",
          "For 64 - bit Windows go to C: \\Program Files(x86)\\Microsoft Office\\Office14\\",
          "Right - click OUTLOOK.EXE and select properties",
          "Under the Compatibility tab, uncheck “Run As Administrator”",
        ],
        imgSrc: require('./png/instantsearch.png'),
        imgAlt: "instantsearch",
      }],
    },
    // POWERPOINT articles
    {
      category: "Powerpoint",
      title: "I can't open Powerpoint attachments from Outlook.",
      instructions: [{  
        objective: "Edit Trust Center settings",
        description:
        'If you are getting an error that says "If you trust the source of this presentation, click Repair." and clicking Repair does not fix the issue, try following these steps.',
        list: [
          "Open Powerpoint, click on File and then Options",
          "select Trust Center and click on Trust Center settings...",
          'select Protected View and uncheck "Enable Protected View for files originating from the Internet"',
        ],
        imgSrc: require('./png/protectedview2.png'),
        imgAlt: "protectedview2.png",
      }],
    },
    // ACTIVE DIRECTORY articles
    {
      category: "Active Directory",
      title: "I'm locked out of my desktop! I can't sign in.",
      instructions: [{  
        objective: "Unlock the user's account on Active Directory",
        description:
        "When a user's login attempts exceed the Account lockout threshold, they'll need an administrator to unlock their account.",
        list: [
          "Log into the domain controller as an adminstrator and open Active Directory Users and Computers console",
          "Find the AD user, right - click and select Properties",
          "From the Account tab check the box next to Unlock Account and press OK",
        ],
        imgSrc: require('./png/unlockadaccount.png'),
        imgAlt: "unlockadaccount.png",
      }],
    },
    // EXCHANGE articles
    {
      category: "Exchange",
      title: "How To Customize Mailbox Size",
      instructions: [{  
        objective: "Customize the quota settings",
        description:
        "If a client is unable to send or receive mail, it may be due to their mailbox being full. You can increase the size of their mailbox from the Exchange Admin Center.",
        list: [
          "Log into the Exchange Admin Center, select Recipients and then Mailboxes",
          "Select the mailbox and go to Properties",
          "Select mailbox usage and check Customize the quota settings for this mailbox",
        ],
        imgSrc: require('./png/mailboxquota.png'),
        imgAlt: "mailboxquota.png",
      }],
      notes: [
        "Issue a warning at(GB): sets the maximum storage limits before the user receives a warning",
        "Prohibit send at(GB): prevents the user from sending once the limit is reached",
        "Prohibit send and receive at(GB): prevents the user from sending or receiving email once the limit is reached.",
      ],
    },
    {
      category: "Exchange",
      title: "How To Create A Retention Policy",
      instructions: [
        { 
          objective: "Step 1. Enable Archiving",
          description:
            "Enable archiving for the mailboxes that will be assigned the retention policy. You can do this step first or save it for last. Note that when archiving is enabled, the “Default MRM Policy” is applied by default which includes the “Default 2 year move to archive” retention tag.",
          list: [
            "Log into the Exchange Admin Center, select Recipients and then Mailboxes",
            "You can bulk - enable archiving by holding Shift or Ctrl",
            "On the right, look for Archive and select Enable",
          ],
          imgSrc: require('./png/retention1.png'),
          imgAlt: "retention1.png",
        },
        {
          objective: "Step 2. Create A Retention Tag",
          description:
          "When creating a new retention tag, it is applied to the entire mailbox by default.",
          list: [
            "From Compliance Management navigate to Retention Tags and click Add +",
            "Name the retention tag and check a Retention action",
            "Set the Retention period",
          ],
          imgSrc: require('./png/retention2.png'),
          imgAlt: "retention2.png",
        },
        {
          objective: "Step 3. Create A Retention Policy",
          description: "After creating the retention tag, create a retention policy and add the retention tag to that policy.",
          list: [
            "From Compliance Management navigate to Retention Policies and click Add +",
            "Name the retention policy and add the retention tag you created in the previous step",
            "click Save",
          ],
        },
        {
          objective: "Step 4. Apply The Retention Policy",
          description: "Apply the retention policy individually or by bulk",
          list: [
            "Select a mailbox and select mailbox features",
            "Click on the drop - down list under Retention policy: and select a retention policy",
            "You can confirm that the retention policy is working by checking mailbox features and to the right it should say Archiving: Enabled",
          ],
          imgSrc: require('./png/retention3.png'),
          imgAlt: "retention3.png",
        },
      ],
    },
  ]
  setArticles(articles)
},[])
  
  // try to use useMemo over useEffect
  const filteredArticles: IArticle[] = useMemo(() => {
    const filterArticles = (category: string): IArticle[] => {
      if (search) {
        return articles.filter((article) => {
          const articleTitle = article.title.toLowerCase();
          return articleTitle.includes(search.toLowerCase());
        })
      } else if (category) {
        return articles.filter((article) => {
          return article.category === category;
        })
      } else {
        return articles
      }
    }
    return filterArticles(category)
  }, [category, search, articles]);

  // install react-router-dom, update basename, and homepage in package.json
  return (
    <BrowserRouter basename="/itblog"> 
      <div className={styles.App}>
        <Nav onHandleHeader={handleHeader} onHandleNavigation={handleNavigation} onHandleSearch={handleSearch}/>
        { category || search ? <div className={styles.Spacer}></div> : <Header/> }
        { filteredArticles.map((article, index) => {
          return <>
            <Article
              {...article} // spread syntax
              key={index}
              />
            {/* <div className={styles.BorderLine}></div> */}
          </>
        })}
      </div>
    </BrowserRouter>
  );
}

export default App;
