import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getBoardDetail } from '../../services/api';
import { BoardDetailType } from '../../services/types';

interface MatchParams {
  id: string;
}

const BoardDetail: React.FC<RouteComponentProps<MatchParams>> = function ({ match }) {
  const [boardDetail, setBoardDetail] = useState<BoardDetailType>();

  useEffect(() => {
    const fetchBoardDetail = async () => {
      try {
        const response = await getBoardDetail(Number(match.params.id));
        setBoardDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBoardDetail();
  }, [match.params.id]);

  return (
    <div>
      {boardDetail && (
        <div>
          <h1>{boardDetail.title}</h1>
          <p>{boardDetail.content}</p>
          <p>{boardDetail.createdAt}</p>
        </div>
      )}
    </div>
  );
};

export default BoardDetail;
