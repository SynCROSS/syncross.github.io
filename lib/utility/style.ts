import type { ArgumentArray } from 'classnames';
import classNames from 'classnames/bind';

type BindStyle = (
  styles: classNames.Binding,
) => (...argument: ArgumentArray) => string;

export const bindStyle: BindStyle = styles => classNames.bind(styles);
