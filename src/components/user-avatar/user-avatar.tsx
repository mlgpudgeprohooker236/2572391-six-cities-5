import classNames from 'classnames';
import { AvatarOptionsType } from './avatar-options';
import { User } from '../../types/user';

type UserAvatarProps = {
  options: AvatarOptionsType;
  user: User;
}

export default function UserAvatar({options, user}: UserAvatarProps): JSX.Element {
  return (
    <div className={`${options.wrapperClassName} user`}>
      <div className={classNames(
        `${options.className}__avatar-wrapper`,
        { [`${options.className}__avatar-wrapper--pro`]: user.isPro },
        'user__avatar-wrapper'
      )}
      >
        <img className={`${options.className}__avatar user__avatar`} src={user.avatarUrl} width={options.imgSize} height={options.imgSize} alt={options.imgHint} />
      </div>
      <span className={`${options.className}__user-name`}>
        {user.name}
      </span>
      {user.isPro &&
        <span className={`${options.className}__user-status`}>
          Pro
        </span>}
    </div>
  );
}
