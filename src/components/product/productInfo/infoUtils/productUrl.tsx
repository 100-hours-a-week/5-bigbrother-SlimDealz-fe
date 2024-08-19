import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ProductUrl = () => {
  const [showLink, setShowLink] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleShareClick = () => {
    setShowLink((prev) => !prev);
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <IconButton
        onClick={handleShareClick}
        style={{ cursor: 'pointer', color: 'black' }}
        disableRipple
      >
        <ShareIcon />
      </IconButton>
      {showLink && (
        <div
          style={{
            position: 'absolute',
            right: '100%',
            top: '100%',
            transform: 'translateY(-20%)',
            whiteSpace: 'nowrap',
          }}
        >
          <Typography
            variant="body2"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {window.location.href}
            <Tooltip title="링크 복사">
              <IconButton
                onClick={handleCopyClick}
                size="small"
                style={{ marginLeft: '4px' }}
              >
                <ContentCopyRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Typography>
          {copySuccess && (
            <Typography
              variant="body2"
              color="success"
              style={{ marginLeft: '3px' }}
            >
              복사 완료!
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductUrl;