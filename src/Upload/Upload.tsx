import React, { useState } from 'react';
import { Button, Input } from '../common';
import { uploadFile } from '../../services/api';
import { UploadContainer } from './Upload.styles';

interface Props {
  onUploadSuccess: (url: string) => void;
}

const Upload: React.FC<Props> = function({ onUploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);

    try {
      const url = await uploadFile(selectedFile);
      onUploadSuccess(url);
    } catch (error) {
      console.error(error);
    }

    setIsUploading(false);
  };

  return (
    <UploadContainer>
      <Input type="file" onChange={handleFileInputChange} />
      <Button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload"}
      </Button>
    </UploadContainer>
  );
};

export default Upload;
