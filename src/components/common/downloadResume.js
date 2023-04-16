const downloadResume = () => {
    const url = 'amit_jagdale_cv (1).pdf';
    
    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = 'amit_jagdale_cv (1).pdf';
    
    // Add the anchor element to the document
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Remove the anchor element from the document
    document.body.removeChild(link);
  }

  export default downloadResume;