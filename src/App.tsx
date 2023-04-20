import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import styles from './App.module.scss';
import Nav from './components/Nav';
import Header from './components/Header';
import ArticleCompact from './components/ArticleCompact';

function App() {
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState<IArticle[]>([]);
  
  interface IArticle {
    title: string;
    objective: string;
    description: string;
    instructions: string[];
    category: string;
    imgSrc: string;
    imgAlt: string;
  }
  
  const handleClick = (category: string) => {
    setCategory(category);
  }

  useEffect(() => {
    // API call
    const articles: IArticle[] = [{
      title: "My drives are missing on Windows Explorer",
      objective: "Change the Windows Explorer target path",
      description: "If you are using Windows 7 and Windows Explorer is not showing all of your folders and drives, you may need to fix the target path.",
      instructions: [
        "Open the Windows Explorer Properties",
        "Select the Shortcut tab",
        "Set the Target path to: %windir%explorer.exe",
      ],
      category: 'Operating Systems',
      imgSrc: require('./png/winexplorertarget.png'),
      imgAlt: 'winexplorertarget.png',
    },
    {
      title: 'How can I set File Explorer to open to "This PC" instead of "Quick Access?"',
      objective: "Edit Folder Options",
      description: "Open File Explorer and edit the General settings",
      instructions: [
        "Open File Explorer",
        "Select File at the top left",
        "Select Change folder and search options",
        "Set Open File Explorer to: This PC",
      ],
      category: "Operating Systems",
      imgSrc: require('./png/fileexplorerthispc.png'),
      imgAlt: "fileexplorerthispc.png",
    },
    {
      title: 'Error: \"You can\'t connect to the file share because it\'s not secure."',
      objective: "Enable SMBv1",
      description:
      "SMBv1 is an old and insecure network file sharing protocol that is disabled on Windows 10 by default.",
      instructions: [
        "Open Control Panel",
        "select Programs and Features",
        "Check SMB 1.0 / CIFS File Sharing Support",
      ],
      category: "Operating Systems",
      imgSrc: require('./png/smb1error.png'),
      imgAlt: "smb1error",
    },
    // PRINTERS articles
    {
      title: "My printer is randomly printing pages",
      objective: "Clear the Print Spooler",
      description:
      "If a printer is randomly printing pages on it's own, try clearing the Print Spooler.",
      instructions: [
        "Press Winkey + r and type services.msc",
        "right - click Print Spooler select Stop",
        "Next, navigate to C: \\Windows\\System32\\spool\\PRINTERS",
        "Delete all the files in that folder and restart the Print Spooler",
      ],
      category: "Printers",
      imgSrc: require('./png/clearspooler.png'),
      imgAlt: "clearspooler.png",
    },
    {
      title: "My printer is printing a crazy symbols!",
      objective: "Install the latest driver",
      description:
      "If a printer is printing hieroglyphics it's usually a driver issue. Go to the manufacturer's website to install the latest driver. Every installation process is different. If you've installed the latest driver and the printer is still not printing correctly, make sure the printer is using the latest driver from the Control Panel.",
      instructions: [
        "Open Control Panel and select Devices and Printers",
        "Right - click the printer and select Printer Properties",
        "Click the Advanced tab",
        "click on the Driver drop - down list and select the latest driver",
      ],
      category: "Printers",
      imgSrc: require('./png/hieroglyphics.png'),
      imgAlt: "hieroglyphics",
    },
    // OUTLOOK articles
    {
      category: "Outlook",
      title: 'Error: "The set of folders cannot be opened."',
      objective: "Delete the .ost file and recreate the Outlook profile",
      description:
      "If a client cannot open their Outlook because of this prompt, try deleting corrupt .ost file and recreating their Outlook Profile",
      instructions: [
        "Go to C: \\Users\\username\\AppData\\Local\\Microsoft\\Outlook",
        "Delete the corrupt.ost file",
        "Right - click the printer and select Printer Properties",
        "Open Control Panel and select Mail",
        "Click Add...to create a new profile",
      ],
      imgSrc: require('./png/setoffolders.png'),
      imgAlt: "setoffolders.png",
    },
    {
      title: 'Error: "Library not registered."',
      objective: "Make changes to the Windows Registry",
      description:
      "This error usually occurs after a upgrade. There may be an older key in the Windows Registry that needs to be deleted. Backup the key by saving it as an Export before making any changes to the Registry. ",
      instructions: [
        "Press Start, type regedit and click on Registry Editor",
        "Nagivate to HKEY_CLASSES_ROOT\\Typelib\\0006F062 - 0000 - 0000 - C00 - 000000000046",
        "Backup the folder before deleting it",
        "Now try to open Outlook",
        "If that doesn't work, try running an Office repair",
      ],
      category: "Outlook",
      imgSrc: require('./png/librarynotregistered.png'),
      imgAlt: "librarynotregistered",
    },
    {
      title: 'Error: "Instant Search is not available when Outlook is running with administrator permissions."',
      objective: "Uncheck “Run As Administrator” for Outlook.exe",
      description:
      "If Outlook Instant Search is not working properly, trying reconfiguring the Compatibility settings for Outlook.",
      instructions: [
        "For 32 - bit Windows go to C: \\Program Files\\Microsoft Office\\Office14\\",
        "For 64 - bit Windows go to C: \\Program Files(x86)\\Microsoft Office\\Office14\\",
        "Right - click OUTLOOK.EXE and select properties",
        "Under the Compatibility tab, uncheck “Run As Administrator”",
      ],
      category: "Outlook",
      imgSrc: require('./png/instantsearch.png'),
      imgAlt: "instantsearch",
    },
    // POWERPOINT articles
    {
      category: "Powerpoint",
      title: "I can't open Powerpoint attachments from Outlook.",
      objective: "Edit Trust Center settings",
      description:
      'If you are getting an error that says "If you trust the source of this presentation, click Repair." and clicking Repair does not fix the issue, try following these steps.',
      instructions: [
        "Open Powerpoint, click on File and then Options",
        "select Trust Center and click on Trust Center settings...",
        'select Protected View and uncheck "Enable Protected View for files originating from the Internet"',
      ],
      imgSrc: require('./png/protectedview2.png'),
      imgAlt: "protectedview2.png",
    },
    // ACTIVE DIRECTORY articles
    {
      category: "Active Directory",
      title: "I'm locked out of my desktop! I can't sign in.",
      objective: "Unlock the user's account on Active Directory",
      description:
      "When a user's login attempts exceed the Account lockout threshold, they'll need an administrator to unlock their account.",
      instructions: [
        "Log into the domain controller as an adminstrator and open Active Directory Users and Computers console",
        "Find the AD user, right - click and select Properties",
        "From the Account tab check the box next to Unlock Account and press OK",
      ],
      imgSrc: require('./png/unlockadaccount.png'),
      imgAlt: "unlockadaccount.png",
    },
    // EXCHANGE articles
    {
      category: "Exchange",
      title: "How To Customize Mailbox Size",
      objective: "Customize the quota settings",
      description:
      "If a client is unable to send or receive mail, it may be due to their mailbox being full. You can increase the size of their mailbox from the Exchange Admin Center.",
      instructions: [
        "Log into the Exchange Admin Center, select Recipients and then Mailboxes",
        "Select the mailbox and go to Properties",
        "Select mailbox usage and check Customize the quota settings for this mailbox",
      ],
      // notes: [
        //   "Issue a warning at(GB): sets the maximum storage limits before the user receives a warning",
        //   "Prohibit send at(GB): prevents the user from sending once the limit is reached",
        //   "Prohibit send and receive at(GB): prevents the user from sending or receiving email once the limit is reached.",
        // ],
        imgSrc: require('./png/mailboxquota.png'),
        imgAlt: "mailboxquota.png",
      },
    ]
    setArticles(articles)
  },[])
  
  const filteredArticles: IArticle[] = useMemo(() => {
    const filterArticles = (category: string): IArticle[] => {
      if (category) {
        return articles.filter((article) => {
          return article.category === category;
        })
      } else {
        return articles
      }
    }
    
    return filterArticles(category)
  }, [category, articles]);

  // install react-router-dom, update basename, and homepage in package.json
  return (
    <div className={styles.App}>
      <BrowserRouter basename="/itblog"> 
      <Nav handleClick={handleClick}/>
        <Header/>
        { filteredArticles.map((article, index) => {
          return <>
            <ArticleCompact props={article} key={index}/>
            <div className={styles.BorderLine}></div>
          </>
        })}
      </BrowserRouter>
  </div>
  );
}

export default App;
