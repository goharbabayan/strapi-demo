'use client'

import { useState, useEffect } from 'react';
import styles from './escorts.module.css';
import Text from '@/components/text/Text';
import Loading from '@/app/loading';
import { useFetchData } from '@/app/utils/hooks/useFetch';
import { fetchUserRatesAndServices } from '@/app/utils/helpers';
import ProviderCard from '../providerCard/ProviderCard';
import { SERVICE_PROVIDER } from '@/app/utils/constants/userRoles';
import Modal from '../modal/Modal';
import Popup from '../popup/Popup';
import InfoIcon from '../icons/Info';

export default function Escorts ({managerId, onVisitProfileButtonClick, userData, setUserData,setErrors, submitManagerEscortData}) {
  const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const [members, setMembers] = useState(null);
  const [showSuccessfullRemoveMessage, setShowSuccessfullRemoveMessage] = useState(false);
  const [showRemoveEscortConfirmationPopup, setShowRemoveEscortConfirmationPopup] = useState(false);
  const [escortId, setEscortId] = useState(null);

  useEffect(() => {
    const managerToken = JSON.parse(localStorage.getItem('token'));
    if(!managerToken) return;
    const fetchURL = `${strapiBaseUrl}/api/users?filters[managerID][$eq]=${managerId}&populate=*`;
    useFetchData(fetchURL, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${managerToken}`
      }
    }).then(data => {
      const sortedMembers = Array.isArray(data) && data.length > 0 
      ? [...data].sort((a, b) => b.id - a.id) 
      : [];
      setMembers(sortedMembers);
    });
  }, [showSuccessfullRemoveMessage])

  const inFoMessageForDeletingEscortContent = [
    {
      title: '',
      text: 'The escort will be permanently deleted.',
      showButtons: true,
      buttons: [
        {
          children: 'Cancel',
          variant: 'general',
          type: 'button',
          onClick: () => handleClosePopup(),
        },
        {
          children: 'Delete Escort',
          variant: 'main',
          type: 'button',
          onClick: () => handleRemoveMember(),
        },
      ]
    }
  ];

  const handleManagerEscortDataChange = async (escortId, updatedEscortData) => {
    console.log('(!field || !escortId)', updatedEscortData, escortId);
    
    if (!updatedEscortData || !escortId) return;
    setErrors(null);
    // const userRatesAndServicesData = await fetchUserRatesAndServices(null, escortId);
    submitManagerEscortData(updatedEscortData, false, escortId);
    // await useFetchData(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users?filters[id][$eq]=${escortId}&populate=*`, {
    //   method: 'GET',
    // }).then((res) => {
    //     const {data, error} = res;
    //     if (error) {
    //       setErrors(error);
    //     } else {
    //       if (res && Array.isArray(res)) {
    //         const { id, blocked, createdAt, updatedAt, confirmed, role, ...escortData } = res[0];
    //         const updatedUserData = {
    //           ...escortData,
    //           ...userRatesAndServicesData,
    //           [field]: value,
    //         };
    //         setUserData({
    //           ...userData,
    //           user: updatedUserData,
    //           userId: id,
    //         });
    //         setMembers(prevMembers =>
    //           prevMembers.map(member => member.id === id ? { ...member, availableNow: !member.availableNow } : member)
    //         );
    //         console.log('updatedUserDa', updatedUserData, 'id', id, 'escortId', escortId);
            
    //         submitManagerEscortData(updatedUserData, true, id);
    //       }
    //     }
    //   });
  };

  const handleRemoveMember = async () => {
    const memberToken = process.env.NEXT_PUBLIC_API_TOKEN_MEMBER;
    if(!escortId || !memberToken) return;

    useFetchData(`${strapiBaseUrl}/api/members/${escortId}`, {
      method: 'DELETE',
      body: JSON.stringify(escortId),
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${memberToken}`
      }
    }).then(data => {
        if (data.error || data.errors) {
          const errorMessage = data.error.message;
          console.error(errorMessage);
        } else {
          setShowRemoveEscortConfirmationPopup(false);
          setShowSuccessfullRemoveMessage(true);
          setTimeout(() => {
            setShowSuccessfullRemoveMessage(false);
          }, 5000)
        }
      });
  }

  const handleClosePopup = () => {
    setShowRemoveEscortConfirmationPopup(false);
  }
  return (
    <>
      {!members && <Loading className={styles.loading} />}
      {members && members?.length > 0 &&
        <ul className={`${styles.list} unstyled-list`}>
          {members.map(member => {
            return (
              <ProviderCard
                key={member.id}
                provider={member}
                count={3}
                roleType={SERVICE_PROVIDER.type}
                isManagerEscort={true}
                onChanges={handleManagerEscortDataChange}
                onVisitProfileButtonClick={() => onVisitProfileButtonClick(member.id)}
                onRemoveIconClick={(id) => {
                  setShowRemoveEscortConfirmationPopup(true);
                  setEscortId(id);
                }}
              />
            )
          })}
        </ul>
      }
      {showRemoveEscortConfirmationPopup &&
        <Modal
          title={`Are you sure you want to delete this escort?`}
          content={inFoMessageForDeletingEscortContent}
          closeModal={handleClosePopup}
        />
      }
      {showSuccessfullRemoveMessage &&
        <Popup
          title={'Successfuly deleted'}
          text={'The escort was successfully removed'}
          Icon={<InfoIcon />}
          onClose={() => setShowSuccessfullRemoveMessage(false)}
          contentClassName={styles.modal}
        />
      }
      {members && members.length === 0 &&
        <Text
          tag={'h4'}
          className={'text-middle'}
          children={`You don't have escorts yet.`}
        />
      }
    </>
  )
}
